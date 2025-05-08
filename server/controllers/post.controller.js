const { json } = require("express");
const db = require("../config/db");

const postController = {
  getAllPosts: async (req, res) => {
    // Retrieve recent posts from the database
    const allowedFilters = ["recent", "editors", "popular"];

    try {
      const { filter, limit } = req.query;
      if (limit && (!Number.isInteger(Number(limit)) || Number(limit) < 0)) {
        return res
          .status(400)
          .json({ error: "The specified limit is not a positive integer" });
      }

      if (filter && !allowedFilters.includes(filter)) {
        return res.status(400).json({
          error:
            "The specified filter is not valid, must be one of : " +
            allowedFilters,
        });
      }
      let query = `
      SELECT
        posts.id,
        posts.title,
        posts.content,
        users.username AS author,
        posts.created_at,
        categories.name AS category,
        posts.img_src,
        posts.likes
      FROM
        posts
      JOIN
        users ON users.id = posts.user_id
      JOIN
        categories ON categories.id = posts.category_id
    `;
      let params = [];

      switch (filter) {
        case "recent":
          query += " ORDER BY created_at DESC";
          break;
        case "editors":
          query += " WHERE posts.id IN (SELECT post_id FROM editors_choice)";
          break;
        case "popular":
          query += " ORDER BY likes DESC";
          break;
      }

      if (limit > 0) {
        query += " LIMIT $1";
        params.push(limit);
      }

      const posts = await db.query(query, params);

      if (posts.rowCount > 0) {
        return res.status(200).json(posts.rows);
      } else {
        return res.status(404).json({ error: "No post found" });
      }
    } catch (error) {
      console.error("Failed to get posts", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getPostsByUser: async (req, res) => {
    try {
      const { userKey } = req.params;

      let dbResponseUser;

      const userIdNumber = Number(userKey);

      if (Number.isInteger(userIdNumber)) {
        dbResponseUser = await db.query(
          "SELECT id, username FROM users WHERE id = $1",
          [userIdNumber]
        );
      } else {
        dbResponseUser = await db.query(
          "SELECT id, username FROM users WHERE username = $1",
          [userKey]
        );
      }

      let user;

      if (dbResponseUser.rowCount > 0) {
        user = dbResponseUser.rows[0];
      } else {
        return res.status(404).json({ error: "User not found" });
      }

      const dbResponsePosts = await db.query(
        "SELECT posts.id, posts.title, posts.content, posts.created_at, categories.name AS category, posts.img_src, posts.likes FROM posts JOIN categories ON posts.category_id = categories.id WHERE posts.user_id = $1 ORDER BY created_at DESC",
        [user.id]
      );
      const posts = dbResponsePosts.rowCount > 0 ? dbResponsePosts.rows : [];

      return res.status(200).json(posts);
    } catch (error) {
      console.error("Failed to get posts: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getPostById: async (req, res) => {
    try {
      const { userKey, postId } = req.params;

      let dbResponseUser;
      const userIdNumber = Number(userKey);

      if (Number.isInteger(userIdNumber)) {
        dbResponseUser = await db.query(
          "SELECT id, username FROM users WHERE id = $1",
          [userIdNumber]
        );
      } else {
        dbResponseUser = await db.query(
          "SELECT id, username FROM users WHERE username = $1",
          [userKey]
        );
      }

      let user;
      if (dbResponseUser.rowCount > 0) {
        user = dbResponseUser.rows[0];
      } else {
        return res.status(404).json({ error: "User not found" });
      }

      const dbResponsePost = await db.query(
        "SELECT posts.id, users.username, posts.title, posts.content, posts.created_at, categories.name AS category, posts.img_src, posts.likes FROM posts JOIN categories ON posts.category_id = categories.id JOIN users ON posts.user_id = users.id WHERE posts.user_id = $1 AND posts.id = $2",
        [user.id, postId]
      );

      if (dbResponsePost.rowCount > 0) {
        const post = dbResponsePost.rows[0];
        return res.status(200).json(post);
      } else {
        return res
          .status(404)
          .json({ error: "Post id not found for this user" });
      }
    } catch (error) {
      console.error("Failed to get the post: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  isPostLiked: async (req, res) => {
    try {
      const { postId } = req.params;
      const { userId } = req.user;

      const dbResponse = await db.query(
        "SELECT users.id, users.username FROM likes JOIN users ON users.id = likes.user_id WHERE post_id = $1 AND user_id = $2",
        [postId, userId]
      );

      return res.status(200).json({ hasLiked: dbResponse.rowCount > 0 });
    } catch (error) {
      console.error("Failed to get the likes: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  togglePostLike: async (req, res) => {
    try {
      const { userId } = req.user;
      const { postId } = req.params;

      const dbResponseHasLiked = await db.query(
        "SELECT users.id, users.username FROM likes JOIN users ON users.id = likes.user_id WHERE post_id = $1 AND user_id = $2",
        [postId, userId]
      );

      const hasLiked = dbResponseHasLiked.rowCount > 0;
      if (hasLiked) {
        await db.query(
          "DELETE FROM likes WHERE user_id = $1 AND post_id = $2",
          [userId, postId]
        );
      } else {
        await db.query("INSERT INTO likes (user_id, post_id) VALUES ($1, $2)", [
          userId,
          postId,
        ]);
      }

      return res.status(201).send();
    } catch (error) {
      console.error("Failed to toggle the like state: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = postController;

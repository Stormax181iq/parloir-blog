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
};

module.exports = postController;

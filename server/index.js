const express = require("express");
const app = express();
const db = require("./config/db.js");

const PORT = process.env.PORT || 5000;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", async (req, res) => {
  res.send("hello");
});

app.get("/api/categories/:key", async (req, res) => {
  const key = req.params.key;
  let category;

  try {
    const userIdNumber = Number(key);
    if (Number.isInteger(userIdNumber)) {
      category = await db.query(
        "SELECT id, name, posts FROM categories WHERE id = $1",
        [userIdNumber]
      );
    } else {
      // Assumes it is a string and thus the name of the category
      category = await db.query(
        "SELECT id, name, posts FROM categories WHERE name = $1",
        [key]
      );
    }

    if (category.rowCount > 0) {
      return res.status(200).json(category.rows[0]);
    } else {
      return res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    console.error("Failed to fetch category", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/categories", async (req, res) => {
  const sort = req.query.sort;
  const limit =
    req.query.limit === undefined || req.query.limit === ""
      ? 0
      : req.query.limit;

  try {
    if (!Number.isInteger(limit) || Number(limit) < 0) {
      return res.status(400).json({ error: "Limit is not a positive integer" });
    }
    let categories;
    if (sort === "popular") {
      let query = "SELECT id, name, posts FROM categories ORDER BY posts DESC";
      const params = [];

      if (limit > 0) {
        query += " LIMIT $1";
        params.push(limit);
      }
      categories = await db.query(query, params);
    } else {
      categories = await db.query("SELECT id, name, posts FROM categories");
    }

    return res.status(200).json(categories.rows);
  } catch (error) {
    console.error("Failed to fetch categories", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/posts", async (req, res) => {
  // Retrieve recent posts from the database
  const allowedFilters = ["", "recent", "editors", "popular"];
  const filter = req.query?.filter;
  const limit = req.query?.limit || 0;

  try {
    if (!Number.isInteger(Number(limit)) || Number(limit) < 0) {
      return res
        .status(400)
        .json({ error: "The specified limit is not a positive integer" });
    }

    if (!allowedFilters.includes(filter)) {
      return res
        .status(400)
        .json({ error: "The specified filter is not valid" });
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
});

app.get("/api/users/:key", async (req, res) => {
  // Get users from the database, given parameters
  try {
    const key = req.params.key;

    let user;
    // Handle id parameter
    const userIdNumber = Number(key);
    // Check if the id is an integer

    if (Number.isInteger(userIdNumber)) {
      user = await db.query("SELECT id, username FROM users WHERE id = $1", [
        userIdNumber,
      ]);
    } else {
      // Assumes key is a username
      user = await db.query(
        "SELECT id, username FROM users WHERE username = $1",
        [key]
      );
    }

    // Check if data is empty
    if (user.rowCount > 0) {
      return res.status(200).json(user.rows[0]);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

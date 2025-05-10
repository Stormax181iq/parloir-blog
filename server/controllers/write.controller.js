const { json } = require("express");
const db = require("../config/db");

const writeController = {
  publishPost: async (req, res) => {
    try {
      const MAX_IMG_SIZE = 2000;
      const { title, content, category } = req.body;
      const { userId } = req.user;

      if (!title) {
        return res.status(400).json({ error: "Title not provided" });
      } else if (!content) {
        return res.status(400).json({ error: "Content not provided" });
      }

      const randomImgSrc = `https://picsum.photos/${Math.floor(Math.random() * MAX_IMG_SIZE)}/${Math.floor(Math.random() * MAX_IMG_SIZE)}`;

      let categoryId;
      if (category) {
        try {
          const dbResponseCategory = await db.query(
            "SELECT id FROM categories WHERE name = $1",
            [category]
          );

          if (dbResponseCategory.rowCount > 0) {
            categoryId = dbResponseCategory.rows[0].id;
          } else {
            return res.status(404).json({ error: "Category not found" });
          }
        } catch (error) {
          console.error("Failed to get category id: ", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }
      }

      const dbResponse = await db.query(
        "INSERT INTO posts (title, content, category_id, img_src, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [title, content, categoryId, randomImgSrc, userId]
      );

      const data = dbResponse.rows;
      return res.status(201).json(data);
    } catch (error) {
      console.error("Error creating post: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = writeController;

const db = require("../config/db");

const categoryController = {
  getAllCategories: async (req, res) => {
    const { sort, limit } = req.query;
    const allowedSorts = ["popular"];

    if (sort && !allowedSorts.includes(sort)) {
      return res.status(400).json({
        error: `The sort keyword is invalid, must be one of : ${allowedSorts}`,
      });
    }

    if (limit && (Number.isInteger(limit) || Number(limit) < 0)) {
      return res.status(400).json({ error: "Limit is not a positive integer" });
    }

    try {
      let categories;
      if (sort === "popular") {
        let query =
          "SELECT id, name, posts FROM categories ORDER BY posts DESC";
        const params = [];

        if (limit && limit > 0) {
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
  },

  getCategoryById: async (req, res) => {
    const { key } = req.params;
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
  },
};

module.exports = categoryController;

const db = require("../config/db");
const { default: checkUserKey } = require("../helpers/checkUserKey");

const userController = {
  getUser: async (req, res) => {
    const allowedFilters = ["id", "username"];
    // Get users from the database, given parameters
    try {
      const { filter } = req.query;
      if (filter && !allowedFilters.includes(filter)) {
        return res.status(400).json({ error: "Wrong filter in query" });
      }
      const { userKey } = req.params;

      let dbResponseUser;

      if (checkUserKey(userKey) === "id") {
        dbResponseUser = await db.query(
          "SELECT id, username, description, profile_pic_src FROM users WHERE id = $1",
          [userKey]
        );
      } else {
        // Assumes key is a username
        dbResponseUser = await db.query(
          "SELECT id, username, description, profile_pic_src FROM users WHERE username = $1",
          [userKey]
        );
      }

      // Check if data is empty
      if (dbResponseUser.rowCount > 0) {
        const user = dbResponseUser.rows[0];

        // Give a different response to the user depending on the filter
        let responseData;
        switch (filter) {
          case "id":
            responseData = { id: user.id };
            break;
          case "username":
            responseData = { username: user.username };
            break;
          default:
            responseData = user;
        }

        return res.status(200).json(responseData);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getLikesForUser: async (req, res) => {
    try {
      const { userKey } = req.params;

      const queryBody =
        "SELECT posts.id FROM likes JOIN posts ON likes.post_id = posts.id";

      const queryClause =
        checkUserKey(userKey) === "id"
          ? "WHERE likes.user_id = $1"
          : "WHERE likes.user_id = (SELECT id FROM users WHERE username = $1)";

      const query = queryBody + " " + queryClause;
      const dbResponse = await db.query(query, [userKey]);

      const likes = dbResponse.rows;

      return res.status(200).json(likes);
    } catch (error) {
      console.error("Failed to get likes", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = userController;

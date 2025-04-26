const router = require("express").Router();
const db = require("../config/db");

router.get("/:key", async (req, res) => {
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

module.exports = router;

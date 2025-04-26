require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const authController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
          return res.status(500).json({ error: "Internal server error" });
        } else {
          db.query("INSERT INTO users (username, hash) VALUES ($1, $2)", [
            username,
            hash,
          ]);
          return res.status(201).send();
        }
      });
    } catch (error) {
      console.error("Failed to register user : ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const userData = await db.query(
        "SELECT id, hash FROM users WHERE username = $1",
        [username]
      );

      if (userData.rowCount != 1) {
        return res
          .status(404)
          .json({ error: "Could not find user, please check your username" });
      }
      const { id, hash } = userData.rows[0];

      const match = await bcrypt.compare(password, hash);

      if (match) {
        const token = jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        res.cookie("token", token, {
          httpOnly: true /* TODO : , secure: true*/,
        });
        return res.status(201).json({
          id: id,
          username: username,
          token,
        });
      } else {
        return res.status(401).json({ error: "Login failed: wrong password" });
      }
    } catch (error) {
      console.error("Failed to login user: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = authController;

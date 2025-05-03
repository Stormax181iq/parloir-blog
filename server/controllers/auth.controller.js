require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const authController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (password.trim().length < 8) {
        return res
          .status(400)
          .json({ error: "Password must be at least 8 characters long" });
      }

      const saltRounds = 10;

      bcrypt.hash(password.trim(), saltRounds, async function (err, hash) {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal server error" });
        }

        try {
          await db.query("INSERT INTO users (username, hash) VALUES ($1, $2)", [
            username,
            hash,
          ]);
          return res.status(201).send();
        } catch (dbError) {
          console.error("Database error: ", dbError);
          if (dbError.code === "23502") {
            return res
              .status(400)
              .json({ error: "Username cannot be null or empty" });
          } else if (dbError.code === "23514") {
            return res
              .status(400)
              .json({ error: "Username doesn’t match the requirements" });
          } else if (dbError.code === "23505") {
            return res.status(400).json({ error: "Username already exists" });
          } else {
            return res.status(500).json({ error: "Internal Server Error" });
          }
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
        });
      } else {
        return res.status(401).json({ error: "Wrong password" });
      }
    } catch (error) {
      console.error("Failed to login user: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  check: async (req, res) => {
    try {
      const { token } = req.cookies;

      let decoded;
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      } catch (verifyError) {
        if (verifyError.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token has expired" });
        } else {
          return res.status(403).json({ error: "Invalid Token" });
        }
      }

      const user = await db.query(
        "SELECT id, username FROM users WHERE id = $1",
        [decoded.userId]
      );

      if (user.rowCount > 0) {
        return res.status(200).json({ user: user.rows[0] });
      } else {
        return res
          .status(404)
          .json({ error: "Couldn’t find the user with this token" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  logout: (req, res) => {
    try {
      res.clearCookie("token");
      return res.status(200).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = authController;

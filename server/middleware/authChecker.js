require("dotenv").config();
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const authChecker = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({ error: "No token provided" });
    }

    try {
      const userDecoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const userData = await db.query("SELECT * FROM users WHERE id = $1", [
        userDecoded.userId,
      ]);
      if (userData.rowCount > 0) {
        req.user = userDecoded;
        next();
      } else {
        return res.status(404).json({ error: "Invalid token, user not found" });
      }
    } catch (verifyError) {
      if (verifyError) {
        if (verifyError.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token has expired" });
        } else {
          return res.status(403).json({ error: "Invalid token" });
        }
      }
    }
  } catch (error) {
    console.error("Failed to authenticate user : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = authChecker;

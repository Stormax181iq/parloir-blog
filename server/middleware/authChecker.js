require("dotenv").config();
const jwt = require("jsonwebtoken");

const authChecker = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send();
    }

    try {
      const userDecoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = userDecoded;
      next();
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

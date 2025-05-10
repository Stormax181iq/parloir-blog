const express = require("express");
const db = require("./config/db.js");
const categoryRoutes = require("./routes/category.routes.js");
const postRoutes = require("./routes/post.routes.js");
const userRoutes = require("./routes/user.routes.js");
const authRoutes = require("./routes/auth.routes.js");
const writeRoutes = require("./routes/write.routes.js");
const cookieParser = require("cookie-parser");
const app = express();

const auth = require("./middleware/authChecker.js");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, "127.0.0.1", () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", auth, async (req, res) => {
  res.send("hello");
});

app.use("/api/categories", categoryRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/write", writeRoutes);

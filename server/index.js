const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("", (req, res) => {
  res.send("<h1>Hello Server</h1>");
});

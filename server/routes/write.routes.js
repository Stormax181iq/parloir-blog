const router = require("express").Router();
const writeController = require("../controllers/write.controller");
const authChecker = require("../middleware/authChecker");

router.post("/publish", authChecker, writeController.publishPost);

module.exports = router;

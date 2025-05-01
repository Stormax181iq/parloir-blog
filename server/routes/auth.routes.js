const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/check", authController.check);
router.get("/logout", authController.logout);

module.exports = router;

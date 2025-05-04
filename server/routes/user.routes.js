const router = require("express").Router();
const postController = require("../controllers/post.controller");
const userController = require("../controllers/user.controller");

// User-specific routes
router.get("/:userKey", userController.getUser);

// Posts by user routes
router.get("/:userKey/posts", postController.getPostsByUser);
router.get("/:userKey/posts/:postId", postController.getPostById);

module.exports = router;

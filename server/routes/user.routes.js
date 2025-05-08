const router = require("express").Router();
const postController = require("../controllers/post.controller");
const userController = require("../controllers/user.controller");
const authChecker = require("../middleware/authChecker");

// User-specific routes
router.get("/:userKey", userController.getUser);
router.get("/:userKey/likes", userController.getLikesForUser);

// Posts by user routes
router.get("/:userKey/posts", postController.getPostsByUser);
router.get("/:userKey/posts/:postId", postController.getPostById);
router.get(
  "/:userKey/posts/:postId/liked",
  authChecker,
  postController.isPostLiked
);
router.post(
  "/:userKey/posts/:postId/toggle-like",
  authChecker,
  postController.togglePostLike
);

module.exports = router;

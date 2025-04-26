const router = require("express").Router();
const categoryController = require("../controllers/category.controller");

router.get("/", categoryController.getAllCategories);
router.get("/:key", categoryController.getCategoryById);

module.exports = router;

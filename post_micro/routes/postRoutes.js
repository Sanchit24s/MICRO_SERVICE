const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const PostController = require("../controller/postController");

const router = Router();

router.get("/post", PostController.index);
router.post("/post", authMiddleware, PostController.store);

module.exports = router;
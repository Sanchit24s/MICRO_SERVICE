const { Router } = require("express");
const AuthController = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");
const router = Router();

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/user", authMiddleware, AuthController.user);

module.exports = router;
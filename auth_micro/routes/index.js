const { Router } = require("express");
const AuthRoutes = require("./authRoutes");
const UserRoutes = require("./userRoutes");

const router = Router();

router.use("/api", AuthRoutes);
router.use("/api", UserRoutes);

module.exports = router;
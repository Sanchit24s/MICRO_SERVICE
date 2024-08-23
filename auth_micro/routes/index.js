const { Router } = require("express");
const AuthRoutes = require("./authRoutes");

const router = Router();

router.use("/api", AuthRoutes);

module.exports = router;
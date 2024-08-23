const { Router } = require("express");
const postRoutes = require("./postRoutes");

const router = Router();

router.use("/api", postRoutes);

module.exports = router;
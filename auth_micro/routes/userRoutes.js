const { Router } = require("express");
const UserController = require("../controller/userController");
const router = Router();

router.get("/getUser/:id", UserController.getUser);

module.exports = router;
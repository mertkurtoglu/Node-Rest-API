const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User");
const checkAuth = require("../middleware/checkAuth");

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

module.exports = router;

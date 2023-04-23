const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User");
const checkAuth = require("../middleware/checkAuth");

router.get("/", UserController.getUsers);

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.delete("/:userId", UserController.deleteUser);

module.exports = router;

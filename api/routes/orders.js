const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");

const OrdersController = require("../controllers/Orders");

router.get("/", checkAuth, OrdersController.getAll);

router.get("/:orderId", checkAuth, OrdersController.getOrder);

router.post("/", checkAuth, OrdersController.createOrder);

module.exports = router;

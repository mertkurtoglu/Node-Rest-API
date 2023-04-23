const express = require("express");
const router = express.Router();
const multer = require("multer");
const checkAuth = require("../middleware/checkAuth");
const ProductsController = require("../controllers/Products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get("/", ProductsController.getAll);

router.get("/:productId", ProductsController.getProduct);

router.post("/", checkAuth, upload.single("productImage"), ProductsController.createProduct);

router.delete("/:productId", checkAuth, ProductsController.deleteProduct);

module.exports = router;

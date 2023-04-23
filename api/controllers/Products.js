const mongoose = require("mongoose");
const Product = require("../models/product");

exports.getAll = (req, res, next) => {
  Product.find()
    .select("name price _id productImage")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            productImage: doc.productImage,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/products/" + doc._id,
            },
          };
        }),
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
        details: {
          file: err.stack.split("\n")[1].trim().split(":")[1],
          line: err.stack.split("\n")[1].trim().split(":")[2],
        },
      });
    });
};

exports.createProduct = (req, res, next) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    productImage: req.file.path,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/products/" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
        details: {
          file: err.stack.split("\n")[1].trim().split(":")[1],
          line: err.stack.split("\n")[1].trim().split(":")[2],
        },
      });
    });
};

exports.getProduct = (req, res, next) => {
  const id = req.params.productId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  Product.findById(id)
    .select("name description price _id productImage")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/products",
          },
        });
      } else {
        res.status(404).json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
        details: {
          file: err.stack.split("\n")[1].trim().split(":")[1],
          line: err.stack.split("\n")[1].trim().split(":")[2],
        },
      });
    });
};

exports.updateProduct = (req, res, next) => {
  const id = req.params.productId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const updateProd = {};
  for (const key of Object.keys(req.body)) {
    updateProd[key] = req.body[key];
  }

  Product.updateOne({ _id: id }, { $set: updateProd })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Product updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/" + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
        details: {
          file: err.stack.split("\n")[1].trim().split(":")[1],
          line: err.stack.split("\n")[1].trim().split(":")[2],
        },
      });
    });
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.productId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  Product.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/products",
          body: { name: "String", price: "Number" },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
        details: {
          file: err.stack.split("\n")[1].trim().split(":")[1],
          line: err.stack.split("\n")[1].trim().split(":")[2],
        },
      });
    });
};

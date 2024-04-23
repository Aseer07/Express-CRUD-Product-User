const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getProducts)
  .put("/:id", productController.updateProduct)
  .patch("/:id", productController.updateProductWithPatch)
  .delete("/:id", productController.deleteProduct);

exports.router = router;

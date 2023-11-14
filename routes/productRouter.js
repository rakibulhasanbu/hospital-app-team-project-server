const express = require("express");
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../controller/productController");

const productRouter = express.Router();

productRouter.post("/create_product", createProduct);

productRouter.get("/products", getAllProducts);

productRouter.get("/product/:id", getSingleProduct);

productRouter.patch("/product/:id", updateProduct);

productRouter.delete("/product/:id", deleteProduct);


module.exports = productRouter;

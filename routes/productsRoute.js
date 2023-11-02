const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const productSchema = require("../models/productModel");
const Product = mongoose.model("Product", productSchema);

router.get("/", async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const result = await newProduct.save();
    res.status(200).json({
      status: "success",
      message: "products inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get products by Id

router.get("/:id", async (req, res) => {
  try {
    const result = await Product.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;

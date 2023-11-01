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

module.exports = router;

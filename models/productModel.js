const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  cashback: {
    type: Number,
  },
  imageUrl: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter your blog title"],
    },
    description: {
        type: String,
        required: [true, "Please enter your blog description"],
    },
    district: {
        type: String,
        required: [true, "Please enter your blog district"],
    },
    author: {
        type: String,
        required: [true, "Please enter your blog author"],
    },
    email: {
        type: String,
        required: [true, "Please enter your blog email"],
    },
    imageUrl: {
        type: String,
        required: [true, "Please enter your blog imageUrl"],
    },
    tags: {
        type: [String],
        required: [true, "Please enter your blog tags"],
    },

}, { timestamps: true });

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
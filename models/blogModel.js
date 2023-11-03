const { Schema, default: mongoose } = require("mongoose");

const blogSchema = new Schema({
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
    phone: {
        type: String,
        required: [true, "Please enter your blog phone"],
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
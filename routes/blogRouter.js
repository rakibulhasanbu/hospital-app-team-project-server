const express = require("express");
const { createBlog, getAllBlog } = require("../controller/blogController");

const blogRouter = express.Router();

blogRouter.post("/create_blog", createBlog);

blogRouter.get("/blogs", getAllBlog);

module.exports = blogRouter;
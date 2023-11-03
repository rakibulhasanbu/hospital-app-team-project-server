const express = require("express");
const { createBlog, getAllBlog, getSingleBlog, deleteBlog } = require("../controller/blogController");

const blogRouter = express.Router();

blogRouter.post("/create_blog", createBlog);

blogRouter.get("/blogs", getAllBlog);

blogRouter.get("/blog/:id", getSingleBlog);

blogRouter.delete("/blog/:id", deleteBlog);

module.exports = blogRouter;
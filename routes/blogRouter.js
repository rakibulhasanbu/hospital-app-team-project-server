const express = require("express");
const { createBlog } = require("../controller/blogController");

const blogRouter = express.Router();

blogRouter.post("/create_blog", createBlog);

module.exports = blogRouter;
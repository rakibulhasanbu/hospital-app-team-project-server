const blogModel = require("../models/blogModel");
const CatchAsyncError = require("../utils/catchAsyncError");
const { ErrorHandler } = require("../utils/error");

const createBlog = CatchAsyncError(
    async (req, res, next) => {
        try {
            const data = req.body;
            if (Object.keys(data).length === 0) {
                return next(new ErrorHandler("provide blog data to create blog", 400))
            }

            const blog = await blogModel.create(data)
            res.status(201).json({
                success: true,
                blog
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

const getAllBlog = CatchAsyncError(
    async (req, res, next) => {
        try {
            const blogs = await blogModel.find()
            res.status(200).json({
                success: true,
                blogs
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

const getSingleBlog = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const blog = await blogModel.findById(id);

            if (!blog) {
                return next(new ErrorHandler("Blog not found", 404))
            }

            res.status(200).json({
                success: true,
                blog
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

const updateBlog = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { title, description, imageUrl } = req.body;
            const { id } = req.params

            if (!title, !description, !imageUrl) {
                return next(new ErrorHandler("Provide blog title or description or image url for update", 400));
            }

            const updateData = { title, description, imageUrl };
            const blog = await blogModel.findByIdAndUpdate(id, { $set: updateData }, { new: true });

            res.status(200).json({
                success: true,
                blog
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

const deleteBlog = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const blog = await blogModel.findByIdAndDelete(id);

            if (!blog) {
                return next(new ErrorHandler("Blog not found", 404))
            }

            res.status(200).json({
                success: true,
                message: `${blog?.title} blog deleted successfully`
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

module.exports = { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog }
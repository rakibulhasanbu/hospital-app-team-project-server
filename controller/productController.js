const productModel = require("../models/productModel");
const CatchAsyncError = require("../utils/CatchAsyncError");
const { ErrorHandler } = require("../utils/error");

const createProduct = CatchAsyncError(
    async (req, res, next) => {
        try {
            const data = req.body;
            if (Object.keys(data).length === 0) {
                return next(new ErrorHandler("provide product data to create new product", 400))
            }

            const product = await productModel.create(data);
            res.status(201).json({
                success: true,
                product
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

const getAllProducts = CatchAsyncError(
    async (_req, res, next) => {
        try {
            const products = await productModel.find()
            res.status(200).json({
                success: true,
                products
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

const getSingleProduct = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productModel.findById(id);

            if (!product) {
                return next(new ErrorHandler("Product not found", 404))
            }

            res.status(200).json({
                success: true,
                product
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

const updateProduct = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { name, description, imageUrl, newPrice, cashback } = req.body;
            const { id } = req.params

            if (!name && !description && !imageUrl && !newPrice && !cashback) {
                return next(new ErrorHandler("Provide product name or description or image url or new price or cashback for update product data", 400));
            }

            const updateData = { name, description, imageUrl, newPrice, cashback };
            const product = await productModel.findByIdAndUpdate(id, { $set: updateData }, { new: true });

            res.status(200).json({
                success: true,
                product
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

const deleteProduct = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productModel.findByIdAndDelete(id);

            if (!product) {
                return next(new ErrorHandler("Product not found", 404))
            }

            res.status(200).json({
                success: true,
                message: `${product?.name} product deleted successfully`
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

module.exports = { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct }
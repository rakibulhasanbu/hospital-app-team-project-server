const branchModel = require("../models/branchModel");
const CatchAsyncError = require("../utils/catchAsyncError");
const { ErrorHandler } = require("../utils/error");

const createBranch = CatchAsyncError(
    async (req, res, next) => {
        try {
            const data = req.body;

            if (Object.keys(data).length === 0) {
                return next(new ErrorHandler("Please provide course data", 400));
            }

            const isExistBranch = await branchModel.findOne({ name: data.name });
            if (isExistBranch) {
                return next(new ErrorHandler(`${data.name} branch name is already registered please provide another name`, 400));
            }

            const branch = await branchModel.create(data);

            res.status(201).json({
                success: true,
                branch
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

const getAllBranch = CatchAsyncError(
    async (req, res, next) => {
        try {
            const branches = await branchModel.find();
            res.status(200).json({
                success: true,
                branches
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

const getSingleBranch = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const branch = await branchModel.findOne({ _id: id });

            res.status(200).json({
                success: true,
                branch
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

const deleteSingleBranch = CatchAsyncError(
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const branch = await branchModel.findByIdAndDelete(id);
            console.log(branch);

            if (!branch) {
                return next(new ErrorHandler(`Branch not found`, 400));
            }

            res.status(200).json({
                success: true,
                message: `Delete ${branch?.name} branch successfully`
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

module.exports = {
    createBranch, getAllBranch, getSingleBranch, deleteSingleBranch
};

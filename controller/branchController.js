const branchModel = require("../models/branchModel");
const CatchAsyncError = require("../utils/catchAsyncError");
const { ErrorHandler } = require("../utils/error");

const createBranch = CatchAsyncError(
    async (req, res, next) => {
        try {
            const data = req.body;
            console.log(data);
            if (Object.keys(data).length === 0) {
                return next(new ErrorHandler("Please provide course data", 400));
            }

            const branch = await branchModel.create(data);
            console.log(branch);
            res.status(201).json({
                success: true,
                branch
            })
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
)

module.exports = {
    createBranch
};

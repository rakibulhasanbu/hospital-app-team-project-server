const branchModel = require("../models/branchModel");
const CatchAsyncError = require("../utils/catchAsyncError");

const createBranch = CatchAsyncError(
    async (req, res, next) => {
        try {
            const data = req.body;
            if (Object.keys(data).length === 0) {
                console.log("provide course data");
                // return next(new ErrorHandler("Please provide course data", 400));
            }

            const branch = await branchModel.create(data);
            res.status(201).json({
                success: true,
                branch
            })
        } catch (error) {
            console.log(error);
        }
    }
)

module.exports = {
    createBranch
};

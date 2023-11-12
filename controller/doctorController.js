const doctorModel = require("../models/doctorModel");
const CatchAsyncError = require("../utils/catchAsyncError");
const { ErrorHandler } = require("../utils/error");

const createDoctor = CatchAsyncError(
    async (req, res, next) => {
        try {
            const data = req.body;

            if (Object.keys(data).length === 0) {
                return next(new ErrorHandler("Please provide doctors data", 400));
            }

            const doctor = await doctorModel.create(data);
            res.status(201).json({
                success: true,
                doctor
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

module.exports = { createDoctor }
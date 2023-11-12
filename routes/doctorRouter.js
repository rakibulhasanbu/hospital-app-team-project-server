const express = require("express");
const { createDoctor, getSingleDoctor, getAllDoctors, deleteSingleDoctor, updateSingleDoctor, getDoctorsByBranchId } = require("../controller/doctorController");

const doctorRouter = express.Router();

doctorRouter.post("/add_doctor", createDoctor);

doctorRouter.get("/doctors", getAllDoctors);

doctorRouter.get("/branch_doctors/:id", getDoctorsByBranchId);

doctorRouter.get("/doctor/:id", getSingleDoctor);

doctorRouter.patch("/doctor/:id", updateSingleDoctor);

doctorRouter.delete("/doctor/:id", deleteSingleDoctor);

module.exports = doctorRouter;

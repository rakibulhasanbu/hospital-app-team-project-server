const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const doctorSchema = require("../models/doctorModel");
const Doctor = mongoose.model("Doctor", doctorSchema);

// Get all doctors list
router.get("/", async (req, res) => {
  try {
    const result = await Doctor.find({});
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get a Doctor By Id
router.get("/:id", async (req, res) => {
  try {
    const result = await Doctor.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Post a doctor
router.post("/", async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    console.log(" coming soon", newDoctor);
    const result = await newDoctor.save();
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});
// Edit a Doctor
router.put("/:id", async (req, res) => {
  try {
    const data = req.body;
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          data: data,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    res.status(200).json({
      status: "success",
      message: "Data updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Delete a Doctor
router.delete("/:id", async (req, res) => {
  try {
    const result = await Doctor.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      message: "Data was delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;

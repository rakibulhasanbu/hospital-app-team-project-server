const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  qualifications: {
    type: [String],
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const doctorModel = mongoose.model("doctor", doctorsSchema);

module.exports = doctorModel;

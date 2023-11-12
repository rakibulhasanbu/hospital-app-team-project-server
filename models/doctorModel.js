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
  mobile: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  education: {
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
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const doctorModel = mongoose.model("doctor", doctorsSchema);

module.exports = doctorModel;

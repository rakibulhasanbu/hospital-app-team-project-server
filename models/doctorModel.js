const mongoose = require("mongoose");

const doctorsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  confirm_password: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  serviceCharge: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: ["orthopedics", "radiology", "dentist"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    enum: ["dhaka", "khulna", "barishal"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = doctorsSchema;

const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, "Please enter your Branch name"],
        },
        division: {
            type: String,
            required: [true, "Please enter your Division name"],
        },
        district: {
            type: String,
            required: [true, "Please enter your district name"],
        },
        phone: {
            type: String,
            required: [true, "Please enter your phone name"],
        },
        email: {
            type: String,
            required: [true, "Please enter your email name"],
        },
        imageUrl: {
            type: String,
            required: [true, "Please enter your branch image url"],
        }
    }, { timestamps: true }
)

const branchModel = mongoose.model("branch", branchSchema);

module.exports = branchModel;
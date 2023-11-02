const { Schema, default: mongoose } = require("mongoose");

const branchSchema = new Schema(
    {
        name: {
            type: String,
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
            public_id: String,
            url: String,
        }
    }, { timestamps: true }
)

const branchModel = mongoose.model("branch", branchSchema);

module.exports = branchModel;
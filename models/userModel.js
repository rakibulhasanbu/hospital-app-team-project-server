const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const emailRegexPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: {
            validator: function (value) {
                return emailRegexPattern.test(value);
            },
            message: "Please enter a valid email",
        },
        unique: true,
    },
    password: {
        type: String,
        // required: [true, "Please enter your password"],
        minlength: [6, "Password must be at least 6 characters"],
        select: false,
    },
    imageUrl: {
        public_id: String,
        url: String,
    }
}, { timestamps: true })

//hash password before save
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//compare password
userSchema.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;
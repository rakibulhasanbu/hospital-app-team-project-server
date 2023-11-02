require("dotenv").config();
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL || "";

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((data) => {
            console.log(`Database connected with ${data.connection.host}`);
        });
    } catch (err) {
        console.log(err.message);
        setTimeout(connectDB, 5000);
    }
};

module.exports = connectDB;

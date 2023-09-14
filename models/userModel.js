const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        // required: true,
    },
    imageUrl: {
        type: String,
        // required: true,
    },
    role: {
        type: String,
        // required: true,
    },
    // age: String,

})


module.exports = usersSchema;
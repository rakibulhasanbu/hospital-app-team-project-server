const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    }
    
})
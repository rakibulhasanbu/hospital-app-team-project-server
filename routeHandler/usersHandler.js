const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const usersSchema = require('../schemas/userSchema')
const User = new mongoose.model("User", usersSchema)



//Get all the users
router.get('/', async(req, res)=>{

})

//Get a user by id
router.get('/:id', async(req, res)=>{
    
})

//Post user 
router.post('/', async(req, res)=>{
  
    const newUser = new User(req.body)
    const result= await newUser.save()
    res.status(200).json({
        status:'success',
        message: 'Data inserted successfully',
        data: result
    })
})

//PUT user 
router.put('/:id', async(req, res)=>{
    
})

//Delete user 
router.delete('/:id', async(req, res)=>{
    
})


module.exports = router
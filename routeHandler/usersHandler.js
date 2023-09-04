const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const usersSchema = require('../schemas/userSchema')
const User = mongoose.model("User", usersSchema)



//Get all the users
router.get('/', async(req, res)=>{
    try {
        const result= await User.find({})
        res.status(200).json({
            status:'success',
            message: 'Data get successfully',
            data: result
        })
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }

})

//Get a user by id
router.get('/:id', async(req, res)=>{
    try {
        const result= await User.find({_id: req.params.id})
        res.status(200).json({
            status:'success',
            message: 'Data get successfully',
            data: result
        }) 
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
    
})

//Post user 
router.post('/', async(req, res)=>{
  try {
    const newUser = new User(req.body)
    const result= await newUser.save()
    res.status(200).json({
        status:'success',
        message: 'Data inserted successfully',
        data: result
    })
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
    
})



//Post Multiple users 
router.post('/all', async(req, res)=>{
  try {
    const newUser = req.body
    const result= await User.insertMany(newUser)
    res.status(200).json({
        status:'success',
        message: 'Data inserted successfully',
        data: result
    })
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
    
})

//PUT (Update) user 
router.put('/:id', async(req, res)=>{
    try {
        const userData = req.body
        const result= await User.findByIdAndUpdate({_id: req.params.id},{$set:{
            age:userData.age
        }},
        {
            new:true,
            useFindAndModify: false,
        })
        res.status(200).json({
            status:'success',
            message: 'Data updated successfully',
            data: result
        })
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }

})

//Delete user 
router.delete('/:id', async(req, res)=>{
    try {
        const result= await User.deleteOne({_id: req.params.id})
        res.status(200).json({
            status:'success',
            message: 'Data was delete successfully',
            data: result
        })
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }

})


module.exports = router
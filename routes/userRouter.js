const express = require('express');

const userRouter = express.Router();



//Get all the users
// userRouter.get('/', async (_req, res) => {
//     try {
//         const result = await User.find({})
//         res.status(200).json({
//             status: 'success',
//             message: 'Data get successfully',
//             data: result
//         })
//     } catch (error) {
//         res.status(500).json({ error: 'Server Error' });
//     }

// })

//Get a user by id
// userRouter.get('/:email', async (req, res) => {
//     try {
//         const result = await User.findOne({ email: req.params.email }).exec();
//         res.status(200).json({
//             status: 'success',
//             message: 'Data get successfully',
//             data: result
//         })
//         console.log(result, req.params.email);
//     } catch (error) {
//         res.status(500).json({ error: 'Server Error' });
//     }

// })

//Post user
// userRouter.post('/', async (req, res) => {
//     try {
//         const newUser = new User(req.body)
//         console.log(" comming sonn", newUser);
//         const result = await newUser.save()
//         res.status(200).json({
//             status: 'success',
//             message: 'Data inserted successfully',
//             data: result
//         })
//     } catch (error) {
//         res.status(500).json({ error: 'Server Error' });
//     }

// })



//Post Multiple users
// userRouter.post('/all', async (req, res) => {
//     try {
//         const newUser = req.body
//         const result = await User.insertMany(newUser)
//         res.status(200).json({
//             status: 'success',
//             message: 'Data inserted successfully',
//             data: result
//         })
//     } catch (error) {
//         res.status(500).json({ error: 'Server Error' });
//     }

// })

//PUT (Update) user
// userRouter.put('/:id', async (req, res) => {
//     try {
//         const userData = req.body
//         const result = await User.findByIdAndUpdate({ _id: req.params.id }, {
//             $set: {
//                 age: userData.age
//             }
//         },
//             {
//                 new: true,
//                 useFindAndModify: false,
//             })
//         res.status(200).json({
//             status: 'success',
//             message: 'Data updated successfully',
//             data: result
//         })
//     } catch (error) {
//         res.status(500).json({ error: 'Server Error' });
//     }

// })

//Delete user
// userRouter.delete('/:id', async (req, res) => {
//     try {
//         const result = await User.deleteOne({ _id: req.params.id })
//         res.status(200).json({
//             status: 'success',
//             message: 'Data was delete successfully',
//             data: result
//         })
//     } catch (error) {
//         res.status(500).json({ error: 'Server Error' });
//     }

// })


module.exports = userRouter;
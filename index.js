const express = require('express');
const mongoose = require('mongoose');
const usersHandler = require('./routeHandler/usersHandler')
const cors = require("cors");


const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect(`mongodb+srv://hospitaldb:dofwQ7g9nncwX9FU@cluster0.ju0kv0r.mongodb.net/hospital-db?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log(`connection successful`))
    .catch(err=>console.log(err))


// application routes
app.use('/users', usersHandler)

app.get('/',(req,res)=>{
    res.send('server is running')
})


//default error handler 
function errorHandler(err, req, res, next){
    if(res.headersSend){
        return next(err)
    }
    res.status(500).json({error: err})
}

app.listen(5000,()=>{
    console.log(`app listening at port 5000`)
})
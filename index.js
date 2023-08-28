const express = require('express');
const mongoose = require('mongoose');
const usersHandler = require('./routeHandler/usersHandler')



const app = express()
app.use(express.json())

mongoose.connect(`mongodb+srv://hospitaldb:muDFH7Rz4NWz8733@cluster0.ju0kv0r.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log(`connection successful`))
    .catch(err=>console.log(err))


// application routes
app.use('/users', usersHandler)



//default error handler 
function errorHandler(err, req, res, next){
    if(res.headersSend){
        return next(err)
    }
    res.status(500).json({error: err})
}

app.listen(5000,()=>{
    console.log("app listening at port 5000")
})
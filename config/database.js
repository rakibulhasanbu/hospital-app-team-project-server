const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(`mongodb+srv://hospitaldb:dofwQ7g9nncwX9FU@cluster0.ju0kv0r.mongodb.net/hospital-db?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log(`Database connection successful`))
        .catch(err => console.log(err))

}
module.exports = databaseConnect;
import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

class Database {
  static async connection() {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log(`Database connection successful`);
    } catch (error) {
      console.log("Fail to connect with DB!");
    }
  }
}
export default Database;

// const databaseConnect = () => {
//   mongoose
//     .connect(
//       `mongodb+srv://hospitaldb:dofwQ7g9nncwX9FU@cluster0.ju0kv0r.mongodb.net/hospital-db?retryWrites=true&w=majority`,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     )
//     .then(() => console.log(`Database connection successful`))
//     .catch((err) => console.log(err));
// };
// module.exports = databaseConnect;

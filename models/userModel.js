import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER", "DOCTOR"],
    // required: true,
  },
  // age: String,
});

const UserModel = mongoose.model("User", usersSchema);
export default UserModel;

import { UserModel } from "../models/index.js";
import { hash } from "bcrypt";

class UserController {
  /**
   * MEHTOD   -> GET
   * URI      -> /api/v1/user
   * @description index method will help us to get all user from the database
   */
  static async index(_, res) {
    try {
      const users = await UserModel.find();
      if (!users) return res.status(400).json({ message: "No user fund!" });
      res.status(200).json({
        status: "success",
        message: "Data get successfully",
        data: users,
      }); // not good idea to make response like this way
    } catch (error) {
      return res.status(500).json({ message: "Try again later." });
    }
  }

  /**
   * MEHTOD   -> POST
   * URI      -> /api/v1/user
   * @description store method will help us to create a new user to the database
   */
  static async store(req, res) {
    const { userName, email, password, imageUrl, role } = req.body;
    if ((!email && !userName) || !password)
      return res
        .status(400)
        .json({ message: "Email/username and Password is reqired!" });

    try {
      const isUser = await UserModel.findOne({
        email, // also you can queary with username (if username is unique)
      });

      if (isUser)
        return res.status(400).json({ message: "Email alread exits!" });

      const hashed = await hash(password, 10);
      if (!hashed)
        return res.status(500).json({ message: "Fail to hash password!" });
      const user = await UserModel.create({
        userName,
        email,
        password: hashed,
        role: role || "user",
      });

      res.status(201).json({
        message: "Account created successfull!🎉",
        user,
      });
    } catch (error) {
      return res.status(500).json({ message: "Try again later./" });
    }
  }

  /**
   * TODO
   */
  static async update() {}
  /**
   * TODO
   */
  static async delete() {}
  /**
   * TODO
   */
  static async indexById() {}
}

export default UserController;

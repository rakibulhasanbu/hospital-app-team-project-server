const express = require("express");
const { createDoctor, getSingleDoctor, getAllDoctors, deleteSingleDoctor } = require("../controller/doctorController");

const doctorRouter = express.Router();

doctorRouter.post("/add_doctor", createDoctor);

doctorRouter.get("/doctors", getAllDoctors);

doctorRouter.get("/doctor/:id", getSingleDoctor);

doctorRouter.delete("/doctor/:id", deleteSingleDoctor);

// Edit a Doctor
// router.put("/:id", async (req, res) => {
//   try {
//     const data = req.body;
//     const result = await User.findByIdAndUpdate(
//       { _id: req.params.id },
//       {
//         $set: {
//           data: data,
//         },
//       },
//       {
//         new: true,
//         useFindAndModify: false,
//       }
//     );
//     res.status(200).json({
//       status: "success",
//       message: "Data updated successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

module.exports = doctorRouter;

require("dotenv").config();
const express = require("express");
const usersHandler = require("./routes/userRoute");
const doctorsHandler = require("./routes/doctorsRoute");
const productHandler = require("./routes/productsRoute");
const cors = require("cors");
const connectDB = require("./utils/db");
const branchRouter = require("./routes/branchRouter");
const { ErrorMiddleware } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());
app.use(cors());


// application routes
app.use("/users", usersHandler);
app.use("/doctors", doctorsHandler);
app.use("/products", productHandler);


app.use("/api/v1", branchRouter);

// write test api
app.get("/test", (_req, res, _next) => {
  res.status(200).json({
    success: true,
    message: "Api is working perfectly",
  });
});


// unknown route handling
app.get("*", (req, _res, next) => {
  const err = new Error(`Route ${req.originalUrl} cannot found`);
  err.statusCode = 404;
  next(err);
});

//global middleware for handling error
app.use(ErrorMiddleware)

//app listening here
app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`app listening at port ${process.env.PORT}`);
});
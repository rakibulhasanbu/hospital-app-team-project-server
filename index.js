require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const { ErrorMiddleware } = require("./middleware/errorMiddleware");
const doctorRouter = require("./routes/doctorRouter");
const branchRouter = require("./routes/branchRouter");
const blogRouter = require("./routes/blogRouter");
const userRouter = require("./routes/userRouter");

const productHandler = require("./routes/productsRoute");

const app = express();
app.use(express.json());
app.use(cors());


// application routes
app.use("/api/v1", userRouter, branchRouter, blogRouter, doctorRouter);

app.use("/products", productHandler);



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
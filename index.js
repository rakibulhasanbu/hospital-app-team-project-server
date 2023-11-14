require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const { ErrorMiddleware } = require("./middleware/errorMiddleware");
const doctorRouter = require("./routes/doctorRouter");
const branchRouter = require("./routes/branchRouter");
const blogRouter = require("./routes/blogRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
};
app.use(cors(corsOptions));

//database connection here
let messageDB = "Database not connected yet"
connectDB().then(_data => {
  messageDB = "database connected successfully"
});

// application routes
app.use("/api/v1", userRouter, branchRouter, blogRouter, doctorRouter, productRouter);


// write test api
app.get("/health", (_req, res, _next) => {
  res.status(200).json({
    success: true,
    message: `Api is working perfectly and also ${messageDB} and running on port ${process.env.PORT}`,
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
  console.log(`app listening at port ${process.env.PORT}`);
});
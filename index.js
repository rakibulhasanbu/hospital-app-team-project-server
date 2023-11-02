const express = require("express");
const mongoose = require("mongoose");
const usersHandler = require("./routes/userRoute");
const doctorsHandler = require("./routes/doctorsRoute");
const productHandler = require("./routes/productsRoute");
const cors = require("cors");
const connectDB = require("./utils/db");
const branchRouter = require("./routes/branchRouter");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

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

app.listen(5000, () => {
  console.log(`app listening at port 5000`);
});

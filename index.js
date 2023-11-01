const express = require("express");
const mongoose = require("mongoose");
const usersHandler = require("./routes/userRoute");
const doctorsHandler = require("./routes/doctorsRoute");
const productHandler = require("./routes/productsRoute");
const cors = require("cors");
const databaseConnect = require("./config/database");

const app = express();
app.use(express.json());
app.use(cors());
databaseConnect();

// application routes
app.use("/users", usersHandler);
app.use("/doctors", doctorsHandler);
app.use("/products", productHandler);

app.get("/", (req, res) => {
  res.send("server is running");
});

//default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSend) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(5000, () => {
  console.log(`app listening at port 5000`);
});

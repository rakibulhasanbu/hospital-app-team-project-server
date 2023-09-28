import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { logger, EPurpose } from "dev-http-logger";
import { DBConnectin } from "./configs";
dotenv.config();

/**
 * create app from express
 * define middleware
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(
  logger({
    origin: true,
    purpose: EPurpose.DEV,
    showHeader: true,
  })
);
/**
 * All Routes
 */
// app.use("/api/v1", UserRoutes);
// TODO
// for creating doctor...

/**
 * Server listen
 * Connect DB
 */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  DBConnectin.connection();
  console.log(`Server is running at ${PORT}!`);
});

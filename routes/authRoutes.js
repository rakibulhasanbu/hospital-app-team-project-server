import { Router } from "express";
import { authController } from "../controllers/index.js";
const routes = Router();

routes.post("/auth/login", authController.login);
routes.post("/auth/logout", authController.logout); // TODO -> add middleware
routes.post("/auth/refresh", authController.refresh);
/**
 * Make more routes like this way
 */

export default routes;

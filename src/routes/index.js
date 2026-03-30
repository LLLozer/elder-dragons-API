import { Router } from "express";
import { modelRoutes } from "./model.routes.js";

export const routes = Router();

routes.use(modelRoutes);

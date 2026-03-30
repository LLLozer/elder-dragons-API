import { Router } from "express";
import {
  create,
  get,
  getByID,
  update,
  deleteData,
} from "../controllers/model.controller.js";

export const modelRoutes = Router();

modelRoutes.post("/model", create);
modelRoutes.get("/model", get);
modelRoutes.get("/model/:id", getByID);
modelRoutes.put("/model/:id", update);
modelRoutes.delete("/model/:id", deleteData);

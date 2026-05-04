import { Router } from "express";
import {
  addDescription,
  getDescriptions,
  findDescriptionById,
  updateDesc,
  deleteDesc,
} from "../controllers/description.controller.js";

export const descriptionRoutes = Router();

descriptionRoutes.post("/descriptions/monsters/:id", addDescription);
descriptionRoutes.get("/descriptions", getDescriptions);
descriptionRoutes.get("/descriptions/:id", findDescriptionById);
descriptionRoutes.put("/descriptions/:id", updateDesc);
descriptionRoutes.delete("/descriptions/:id", deleteDesc);

import { Router } from "express";
import {
  createElement,
  getElementByID,
  getElements,
  updateElement,
  deleteElement,
} from "../controllers/elements.controller.js";

export const elementRoutes = Router();

elementRoutes.post("/elements", createElement);
elementRoutes.get("/elements/:id", getElementByID);
elementRoutes.get("/elements", getElements);
elementRoutes.put("/elements/:id", updateElement);
elementRoutes.delete("/elements/:id", deleteElement);

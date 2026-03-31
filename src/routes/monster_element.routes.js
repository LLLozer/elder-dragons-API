import { Router } from "express";
import { getAll, getById } from "../controllers/monster_element.controller.js";

export const monsterElementRoutes = Router();

monsterElementRoutes.get("/monster_element", getAll);
monsterElementRoutes.get("/monster_element/:id", getById);

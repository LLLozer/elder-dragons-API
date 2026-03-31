import { Router } from "express";
import {
  createMonster,
  getMonsterByID,
  getMonsters,
  updateMonster,
  deleteMonster,
} from "../controllers/monster.controller.js";

export const monsterRoutes = Router();

monsterRoutes.get("/monsters", getMonsters);
monsterRoutes.post("/monsters", createMonster);
monsterRoutes.get("/monsters/:id", getMonsterByID);
monsterRoutes.put("/monsters/:id", updateMonster);
monsterRoutes.delete("/monsters/:id", deleteMonster);

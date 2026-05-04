import { Router } from "express";
import { monsterRoutes } from "./monster.routes.js";
import { elementRoutes } from "./elements.routes.js";
import { monsterElementRoutes } from "./monster_element.routes.js";
import { descriptionRoutes } from "./description.routes.js";

export const routes = Router();

routes.use(monsterRoutes);
routes.use(elementRoutes);
routes.use(monsterElementRoutes);
routes.use(descriptionRoutes);

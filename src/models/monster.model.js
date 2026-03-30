import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const MonsterModel = sequelize.define("Monster", {
  monster_name: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  habitat: {
    type: DataTypes.STRING(),
  },
  elements: {},
  size: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  generation: {},
  image: {},
});

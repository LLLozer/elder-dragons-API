import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const MonsterModel = sequelize.define(
  "Monster",
  {
    monster_name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    habitat: {
      type: DataTypes.STRING(),
    },
    size: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    generation: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { MonsterModel } from "./monster.model.js";

export const DescriptionModel = sequelize.define(
  "Description",
  {
    abilities: {
      type: DataTypes.TEXT(),
      allowNull: true,
    },
    behaviour: {
      type: DataTypes.TEXT(),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
  },
  { timestamps: false },
);

MonsterModel.hasOne(DescriptionModel, {
  foreignKey: "monster_id",
  as: "description",
});
DescriptionModel.belongsTo(MonsterModel, {
  foreignKey: "monster_id",
  as: "description",
});

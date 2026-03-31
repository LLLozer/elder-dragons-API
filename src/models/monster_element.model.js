import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { MonsterModel } from "./monster.model.js";
import { ElementsModel } from "./elements.model.js";

export const MonsterElementModel = sequelize.define(
  "Monster_Element",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },
  },
  {
    timestamps: false,
  },
);

MonsterModel.belongsToMany(ElementsModel, {
  through: MonsterElementModel,
  foreignKey: "monster_id",
  as: "elements",
});

ElementsModel.belongsToMany(MonsterModel, {
  through: MonsterElementModel,
  foreignKey: "element_id",
  as: "monsters",
});

MonsterElementModel.belongsTo(ElementsModel, {
  foreignKey: "element_id",
  as: "elements",
});
MonsterElementModel.belongsTo(MonsterModel, {
  foreignKey: "monster_id",
  as: "monsters",
});

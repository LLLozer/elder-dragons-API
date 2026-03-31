import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ElementsModel = sequelize.define(
  "Elements",
  {
    element_name: {
      type: DataTypes.STRING(),
    },
  },
  { timestamps: false },
);

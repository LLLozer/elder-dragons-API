import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  },
);

export const DBStart = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos.");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log("No se pudo conectar a la base de datos. ", error);
  }
};

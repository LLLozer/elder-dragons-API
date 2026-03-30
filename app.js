import express from "express";
import { DBStart } from "./src/config/db.js";
import "dotenv/config";
import { routes } from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, async () => {
  await DBStart();
  console.log(`Servidor corriendo en localhost:${PORT}`);
});

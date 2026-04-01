import express from "express";
import { DBStart } from "./src/config/db.js";
import "dotenv/config";
import { routes } from "./src/routes/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api", routes);

app.listen(PORT, async () => {
  await DBStart();
  console.log(`Servidor corriendo en localhost:${PORT}`);
});

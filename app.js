import express from "express";
import listRouter from "./routes/task.js";
import dotenv from "dotenv";
import { logger } from "./middleware/logger.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/task", logger, listRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

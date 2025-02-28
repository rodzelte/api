import express from "express";
// Import Routes
import getTask from "../controllers/getTask";
import addTask from "../controllers/postTask";
import patchTask from "../controllers/patchTask";
import removeTask from "../controllers/removeTask";

const app = express();
app.use(express.json());

// Task Routes
app.use("/", getTask);
app.use("/", addTask);
app.use("/", patchTask);
app.use("/", removeTask);

export default app;

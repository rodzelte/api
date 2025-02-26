import express from "express";
// Import Routes
import getTask from "../controllers/getTask";
import addTask from "../controllers/postTask";
import patchTask from "../controllers/patchTask";
import removeTask from "../controllers/removeTask";

const app = express();
app.use(express.json());

// Task Routes

app.use("/task", getTask);
app.use("/task", addTask);
app.use("/task", patchTask);
app.use("/task", removeTask);


export default app;
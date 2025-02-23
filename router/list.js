import express from "express";
import { task, findTask, addTask, removeTask } from "../data/taskdata.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(task);
});

router.get("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = findTask(taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

router.delete("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = removeTask(taskId);

  if (!removeTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted" }, removeTask);
});

router.post("/addTask", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = addTask(title);
  res.status(201).json(newTask);
});

export default router;

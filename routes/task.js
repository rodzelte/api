import express from "express";
import { task, findTask, addTask } from "../data/taskdata.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(task);
});

router.get("/find/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = findTask(taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

router.post("/addTask", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = addTask(title);
  res.status(201).json(newTask);
});

router.get("/rate", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(task.slice(0, limit));
  }

  res.status(200).json(task);
});

router.put("/update/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = findTask(taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.title = req.body.title;
  res.status(200).json(task);
});

router.delete("/delete/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = task.findIndex((item) => item.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.splice(taskIndex, 1);
  res.status(200).json({ message: "Task deleted" });
});

export default router;

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const patchTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    if (!id) {
      res.status(400).json({ message: "Task ID is required" });
      return;
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: { title, body },
    });

    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Error updating task" });
  }
};

export default patchTask;

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const removeTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Task ID is required" });
      return;
    }

    await prisma.task.delete({
      where: { id },
    });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(400).json({ message: "Error deleting task wrong input" });
  }
};

export default removeTask;

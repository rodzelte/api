import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, body, userId } = req.body;

    if (!title || !body || !userId) {
      res.status(400).json({ message: "Missing required fields: title, body, userId" });
      return;
    }

    const task = await prisma.task.create({
      data: {
        title,
        body,
        user: { connect: { id: userId } }, // Ensure user exists
      },
    });

    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Error creating task" });
  }
};

export default postTask;

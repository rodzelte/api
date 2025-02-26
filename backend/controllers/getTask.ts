import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/getTask',async (req, res) => {
    try {
   const post =  await prisma.task.findMany();
   res.status(200).json(post);   
    } catch (error) {
        console.error("Error fetching task", error)
        res.status(500).json({message: "Error fetching task"});
    }
});

export default router;
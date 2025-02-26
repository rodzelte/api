import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.delete('/removeTask/:id', async (req, res) => {
    const { id, } = req.params;
   const patch = await prisma.task.delete({
        where:{
            id: String(id),
        },  
        });
     res.status(200).json(patch);
});



export default router;


import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/postTask', async (req, res) => {
      const { title , body } = req.body;
   const patch = await prisma.task.create({
              data:{
              title: title,
              body: body,
             
         }
    });
     res.status(200).json(patch);
});



export default router;


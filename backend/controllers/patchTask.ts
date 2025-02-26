import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.patch('/patchTask/:id', async (req, res) => {
    const { id, } = req.params;
    const { title , body } = req.body;
   const patch = await prisma.task.update({
        where:{
            id: String(id),
        },  

         data:{
              title: title,
              body: body,
             
         }
    });
     res.status(200).json(patch);
});



export default router;


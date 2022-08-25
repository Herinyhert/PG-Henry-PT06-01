import { json } from 'express';
import { PrismaClient } from '@prisma/client';
import { log } from 'console';
import  Router  from 'express'; 

const router = Router()
const prisma = new PrismaClient()
router.use(json())

router.post("/", async (req, res) =>{  
    console.log('--------------------inicio-------------------');
    
    console.log(req.body)
    console.log('---------------------fin---------------------');
    const { name, description, category, stock, price, img, state } = req.body
    const newUser = await prisma.products.create({
        data: {
            name, 
            description, 
            category, 
            stock, 
            price, 
            img, 
            state
        },
      })
    res.status(200).send(newUser)
});

export default router;
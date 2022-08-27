import { json } from 'express';
import  Router  from 'express'; 
import prisma from '../../db';
import { Prisma, PrismaClient } from '@prisma/client';
import { ParsedUrlQuery } from 'querystring';
import { Query, QueryParse } from 'pg';
import { ParsedPath } from 'path';


const router = Router()


router.post("/", async (req, res) =>{  
    const { name, brand, categoryId, stock, price, img, state } = req.body
    const newProduct = await prisma.product.create({
        data: {
            name: name, 
            brand: brand, 
            categoryId: categoryId, 
            stock: stock, 
            price: price, 
            img: img, 
            state: state
        },
      })
    res.status(200).send(newProduct)
});

router.post("/category", async (req, res) =>{  
  const { name } = req.body
  const newCategory = await prisma.category.create({
      data: {
          name: name, 
      },
    })
  res.status(200).send(newCategory)
});


router.get("/:id", async (req, res)=>{
  //console.log("estoy aqui", req.params.id)
  const productId = Number(req.params.id);
  //console.log("2estoy", productId)
  const productUnique = await prisma.product.findUnique({ where: { id: productId },})

  productUnique
  ? res.status(200).send(productUnique)
  : res.status(404).send('no existe id buscado');
})

router.get("/", async (req, res) => {
    let { page= 0, pageSize= 5, name, order  , direction } = req.query;
    const pageNumber = Number(page);
    const pageSizeNumber = Number(pageSize);
    const where: Prisma.ProductWhereInput ={}
    const orderBy: any = []
    if (!Number.isFinite(pageNumber)) {
      res.status(400).json({ message: `the 'page' must be a number` });
      return
    }
    if (!Number.isFinite(pageSizeNumber)) {
      res.status(400).json({ message: `the 'pageSize' must be a number` });
      return
    }
    if (name && typeof name !== 'string') {
      res.status(400).json({ message: `the 'name' must be a string` });
      return
    }
    
    if(name){
      where.name = {
        contains: name, 
        mode: 'insensitive'
      }
    }

    if(order && direction){
      let variable: any = order
      let obj: any ={}
      obj[variable] = direction 
      orderBy.push(obj)
    }
    
    const searchproducts = await prisma.product.findMany({
            skip: (pageNumber * 5) -5,
            take: 5,
            where: where,
            orderBy: orderBy
    })
      res.status(200).json(searchproducts);
  });


export default router
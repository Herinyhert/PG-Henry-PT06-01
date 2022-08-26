import { json } from 'express';
import  Router  from 'express'; 
import prisma from '../../db';
import { Prisma } from '@prisma/client';


const router = Router()


router.post("/", async (req, res) =>{  
    const { name, brand, category, stock, price, img, state } = req.body
    const newProduct = await prisma.product.create({
        data: {
            name: name, 
            brand: brand, 
            category: category, 
            stock: stock, 
            price: price, 
            img: img, 
            state: state
        },
      })
    res.status(200).send(newProduct)
});

// router.get("/", async (req,res) =>{
//     const {name} = req.body
//     const searchproducts = await prisma.products.findMany({
//         where: {
//             name: {
//                 contains: name,
//                 mode: 'insensitive',
//             },
//           },
//     })
//     res.status(200).send(searchproducts)
// })

router.get("/", async (req, res) => {
    let { page= 0, pageSize= 5, name, orderBy ,direction } = req.query;
    const pageNumber = Number(page);
    const pageSizeNumber = Number(pageSize);
    const where: Prisma.ProductWhereInput ={}
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
    const searchproducts = await prisma.product.findMany({
            skip: (pageNumber * 5) -5,
            take: 5,
            where: {name:{
              contains: name, 
              mode: 'insensitive'
            }}
    })

  
      res.status(200).json(searchproducts);
  });

// router.get("/countries", async (req, res) => {
//   let { page = 0, pageSize = 5, name, orderBy ,direction } = req.query;
//   const pageNumber = Number(page);
//   const pageSizeNumber = Number(pageSize);
//   if (!Number.isFinite(pageNumber)) {
//     res.status(400).json({ message: `the 'page' must be a number` });
//     return
//   }
//   if (!Number.isFinite(pageSizeNumber)) {
//     res.status(400).json({ message: `the 'pageSize' must be a number` });
//     return
//   }
//   if (name && typeof name !== 'string') {
//     res.status(400).json({ message: `the 'name' must be a string` });
//     return
//   }
//   try {
//     const { totalCount, data } = await findAllProducts(
//       page= pageNumber,
//       pageSize= pageSizeNumber,
//       name= name,
//     //   direction= direction,
//     //   orderBy= orderBy,
//     );

//     res.status(200).json({
//       page: pageNumber,
//       pageSize: pageSizeNumber,
//       data,
//       totalCount,
//     });
//   } catch (error) {
//     res.status(500).send('error');
//   }
// });

// async function findAllProducts( page: number, pageSize: number, name: any  ): Promise<object> {
//     let where  = {name: {}}
//     let order  = []
//     // if (orderBy && direction){
  
//     // }
//     if (name) {
//       where.name ={name :{
//         startsWith: name,
//         mode: 'insensitive',
//     }, }
//     }
//     const  rows : { count: number, rows: number }  = await prisma.products.findMany({
//         skip: pageSize,
//         take: page * pageSize,
//       where: where,
//     //   order: order
//     });
  
//     return { totalCount: count, data: rows };
//   }

export default router
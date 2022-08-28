import { Router } from "express"
import prisma from "../../../db";


const categoryRoutes = Router()

categoryRoutes.post("/", async (req, res) => {
    const { name } = req.body
    const newCategory = await prisma.category.create({
        data: {
            name: name,
        },
    })
    res.status(200).send(newCategory)
});


/////obtengo todas las categorias.
categoryRoutes.get('/', async (req, res) => {
    const name = req.query.name;

    let allCategories = await prisma.category.findMany()
    if (allCategories) {
        res.status(200).send(allCategories)
    } else {
        res.status(404).send('error');
    }
    

})

export default categoryRoutes
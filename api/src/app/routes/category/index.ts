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

export default categoryRoutes
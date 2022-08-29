import { Router } from "express";
import prisma from "../../../db";

const categoryRoutes = Router();

categoryRoutes.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (typeof name !== "string") {
      res.status(400).json({ message: `the 'name' must be a string` });
      return;
    }
    
    const newCategory = await prisma.category.create({
      data: {
        name: name,
      },
    });
    res.status(200).json(newCategory);
  } catch (error) {
    console.log("post category fail", error);
    res.status(400).json({ message: `post category fail ${error}` });
    return;
  }
});

export default categoryRoutes;

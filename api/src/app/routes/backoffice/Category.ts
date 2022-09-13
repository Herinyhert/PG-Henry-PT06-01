import { Router } from "express";
import prisma from "../../../db";

const categoryRoutes = Router();

categoryRoutes.post("/", async (req, res) => {
  try {
    const { id, name } = req.body;
    if (typeof name !== "string") {
      res.status(400).json({ message: `the 'name' must be a string` });
      return;
    }

    const newCategory = await prisma.category.upsert({
      where: { id: id },
      update: {
        name: name,
      },
      create: {
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

/////obtengo todas las categorias.
categoryRoutes.get("/", async (req, res) => {
  const name = req.query.name;

  let allCategories = await prisma.category.findMany();
  if (allCategories) {
    res.status(200).send(allCategories);
  } else {
    res.status(404).send("error");
  }
});

categoryRoutes.put("/:id", async (req, res) => {
  const categoryId = Number(req.params.id);
  const { name } = req.body;

  let categoryToChange = await prisma.category.update({
    where: { id: categoryId },
    data: {
      name: name,
    },
  });

  res.status(200).json(categoryToChange);
});

categoryRoutes.delete("/:id", async (req, res) => {
  try {
    const categoryId = Number(req.params.id);

    let categoryToDelete = await prisma.category.delete({
      where: { id: categoryId },
    });
    res.json(categoryToDelete);
  } catch (error) {
    res.send(`No se pudo eliminar la categoria, ${error}`);
  }
});

export default categoryRoutes;

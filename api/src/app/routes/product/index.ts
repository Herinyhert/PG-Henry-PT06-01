import { Prisma } from "@prisma/client";
import { Router } from "express";
import prisma from "../../../db";

const productRoutes = Router();

productRoutes.post("/", async (req, res) => {
  const { name, brand, categoryId, stock, price, img, state } = req.body;
  const newProduct = await prisma.product.create({
    data: {
      name: name,
      brand: brand,
      categoryId: categoryId,
      stock: stock,
      price: price,
      img: img,
      state: state,
    },
  });
  res.status(200).send(newProduct);
});

productRoutes.get("/", async (req, res) => {
  let {
    page = 1,
    pageSize = 12,
    name,
    order = "name",
    direction = "asc",
  } = req.query;
  const pageNumber = Number(page);
  const pageSizeNumber = Number(pageSize);
  if (!Number.isFinite(pageNumber)) {
    res.status(400).json({ message: `the 'page' must be a number` });
    return;
  }
  if (!Number.isFinite(pageSizeNumber)) {
    res.status(400).json({ message: `the 'pageSize' must be a number` });
    return;
  }
  if (name && typeof name !== "string") {
    res.status(400).json({ message: `the 'name' must be a string` });
    return;
  }
  if (
    order !== "id" &&
    order !== "name" &&
    order !== "brand" &&
    order !== "stock" &&
    order !== "price" &&
    order !== "state"
  ) {
    res
      .status(400)
      .json({
        message: `the 'order' must be 'id', 'name', 'brand', 'stock', 'price' or 'state'`,
      });
    return;
  }
  if (direction !== "asc" && direction !== "desc") {
    res
      .status(400)
      .json({ message: `the 'direction' must be 'asc' or 'desc'` });
    return;
  }

  const where: Prisma.ProductWhereInput = {};
  if (name) {
    where.name = {
      contains: name,
      mode: "insensitive",
    };
  }

  const searchproducts = await prisma.product.findMany({
    skip: (pageNumber - 1) * pageSizeNumber,
    take: pageSizeNumber,
    where: where,
    orderBy: { [order]: direction },
  });
  res.status(200).json(searchproducts);
});

productRoutes.get("/:id", async (req, res) => {
  //console.log("estoy aqui", req.params.id)
  const productId = Number(req.params.id);
  //console.log("2estoy", productId)
  const productUnique = await prisma.product.findUnique({
    where: { id: productId },
  });

  productUnique
    ? res.status(200).send(productUnique)
    : res.status(404).send("no existe id buscado");
});

export default productRoutes;

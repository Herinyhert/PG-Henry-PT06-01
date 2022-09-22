import { Prisma } from "@prisma/client";
import { Router } from "express";
import prisma from "../../../db";
//import isAuth from "../../middlewares/isAuth";
import passport from "passport";

const productRoutes = Router();

productRoutes.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const { id, name, brand, categoryId, stock, price, img, state } = req.body;
  if (typeof name !== "string") {
    res.status(400).json({ message: `the 'name' must be a string` });
    return;
  }
  if (typeof brand !== "string") {
    res.status(400).json({ message: `the 'brand' must be a string` });
    return;
  }
  if (typeof categoryId !== "number" || categoryId < 1) {
    res.status(400).json({ message: `the 'categoryId' must be a number > 0` });
    return;
  }
  if (typeof stock !== "number" || categoryId < 1) {
    res.status(400).json({ message: `the 'stock' must be a number > 0` });
    return;
  }
  if (typeof price !== "number" || categoryId < 1) {
    res.status(400).json({ message: `the 'price' must be a number > 0` });
    return;
  }
  if (typeof img !== "string") {
    res.status(400).json({ message: `the 'img' must be a string` });
    return;
  }
  if (typeof state !== "string") {
    res.status(400).json({ message: `the 'state' must be a string` });
    return;
  }

  const newProduct = await prisma.product.upsert({
    where: { id: id },
    update: {
      name: name,
      brand: brand,
      categoryId: categoryId,
      stock: stock,
      price: price,
      img: img,
      state: state,
    },
    create: {
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
  let { page = 1, pageSize = 12, name, order = "name", direction = "asc", categoryId, priceMin, priceMax } = req.query;

  const pageNumber = Number(page);
  const pageSizeNumber = Number(pageSize);
  const filterCategoryId = Number(categoryId);
  const filterPriceMin = Number(priceMin);
  const filterPriceMax = Number(priceMax);

  if (!Number.isFinite(pageNumber) || page < 1) {
    res.status(400).json({ message: `the 'page' must be a number > 0` });
    return;
  }
  if (!Number.isFinite(pageSizeNumber) || pageSize < 1) {
    res.status(400).json({ message: `the 'pageSize' must be a number > 0` });
    return;
  }
  if (name && typeof name !== "string") {
    res.status(400).json({ message: `the 'name' must be a string` });
    return;
  }
  if (filterCategoryId && (typeof filterCategoryId !== "number" || filterCategoryId < 1)) {
    res.status(400).json({ message: `the 'CategoryId' must be a number > 0` });
    return;
  }
  if (order !== "id" && order !== "name" && order !== "brand" && order !== "stock" && order !== "price" && order !== "state") {
    res.status(400).json({
      message: `the 'order' must be 'id', 'name', 'brand', 'stock', 'price' or 'state'`,
    });
    return;
  }
  if (direction !== "asc" && direction !== "desc") {
    res.status(400).json({ message: `the 'direction' must be 'asc' or 'desc'` });
    return;
  }
  if (filterPriceMin && (typeof filterPriceMin !== "number" || filterPriceMin < 0)) {
    res.status(400).json({ message: `the 'priceMin' must be a number >= 0` });
    return;
  }
  if (filterPriceMax && (typeof filterPriceMax !== "number" || filterPriceMax < 0 || filterPriceMax < filterPriceMin)) {
    res.status(400).json({ message: `the 'priceMax' must be a number > 0 and > priceMin` });
    return;
  }

  const where: Prisma.ProductWhereInput = {};
  if (name) {
    where.name = {
      contains: name,
      mode: "insensitive",
    };
  }
  if (categoryId) {
    where.categoryId = filterCategoryId;
  }
  if (filterPriceMin) {
    where.price = {
      gte: filterPriceMin,
    };
  }
  if (filterPriceMax) {
    where.price = {
      lte: filterPriceMax,
    };
  }
  if (filterPriceMax && filterPriceMin) {
    where.price = {
      gte: filterPriceMin,
      lte: filterPriceMax,
    };
  }

  const searchproducts = await prisma.product.findMany({
    skip: (pageNumber - 1) * pageSizeNumber,
    take: pageSizeNumber,
    where: where,
    orderBy: { [order]: direction },
    include: { category: true },
  });
  const totalCuantity = await prisma.product.count({
    where: where,
  });

  try{
    res.status(200).json([totalCuantity, searchproducts, req.query]);
  } catch(error){
    res.status(400).json({message: "Error " + error})
  
  }
});

productRoutes.get("/suggestions", async (req, res) => {
  let { prefix } = req.query;
  if (typeof prefix !== "string") {
    return res.status(400).send("the prefix must be a string");
  }
  const suggestions = await prisma.product.findMany({
    select: {
      name: true,
    },
    where: {
      name: {
        contains: prefix,
        mode: "insensitive",
      },
    },
    orderBy: { name: "asc" },
    take: 10,
  });

  res.status(200).json(suggestions.map((s) => s.name));
});

productRoutes.get("/:id", async (req, res) => {
  //console.log("estoy aqui", req.params.id)
  const productId = Number(req.params.id);
  //console.log("2estoy", productId)
  const productUnique = await prisma.product.findUnique({
    where: { id: productId },
    include: { category: true },
  });

  productUnique ? res.status(200).send(productUnique) : res.status(404).send("no existe id buscado");
});

productRoutes.put("/:id", async (req, res) => {
  const productlId = Number(req.params.id);
  const { name, brand, stock, price, img, state, categoryId } = req.body;

  let productToChange = await prisma.product.update({
    where: { id: productlId },
    include: { category: true },
    data: {
      name: name,
      brand: brand,
      stock: stock,
      price: price,
      img: img,
      state: state,
      categoryId: categoryId,
    },
  });

  res.status(200).json(productToChange);
});

productRoutes.delete("/:id", async (req, res) => {
  try {
    const productId = Number(req.params.id);
    //const { name } = req.body;

    let productToDelete = await prisma.product.delete({
      where: { id: productId },
    });
    res.json(productToDelete);
  } catch (error) {
    res.send(`No se pudo eliminar el producto, ${error}`);
  }
});

export default productRoutes;

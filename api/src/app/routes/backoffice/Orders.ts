import { Prisma } from "@prisma/client";
import { Router } from "express";
import prisma from "../../../db";


const backofficeRoutesOrders = Router();

backofficeRoutesOrders.post("/", async (req, res) => {
  try {
    const { amount, status, userId } = req.body;

    const newOrder = await prisma.order.create({
      data: {
        amount: amount,
        status: status,
        userId: userId,
        payment_id: "",
        payment_status: "",
        payment_type: "",
      },
    });

    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: `post Order fail ${error}` });
    return;
  }
});

backofficeRoutesOrders.get("/", async (req, res) => {
  let {
    page = 1,
    pageSize = 12,
    status,
    order = "id",
    direction = "desc",
    userId
  } = req.query;

  const pageNumber = Number(page);
  const pageSizeNumber = Number(pageSize);
  if (!Number.isFinite(pageNumber) || page < 1) {
    res.status(400).json({ message: `the 'page' must be a number > 0` });
    return;
  }
  if (!Number.isFinite(pageSizeNumber) || pageSize < 1) {
    res.status(400).json({ message: `the 'pageSize' must be a number > 0` });
    return;
  }
  if (status && typeof status !== "string") {
    res.status(400).json({ message: `the 'name' must be a string` });
    return;
  }

  if (
    order !== "id"
  ) {
    res.status(400).json({
      message: `the 'order' must be 'id', 'name', 'email', 'surname'`,
    });
    return;
  }
  if (direction !== "asc" && direction !== "desc") {
    res
      .status(400)
      .json({ message: `the 'direction' must be 'asc' or 'desc'` });
    return;
  }

  const where: Prisma.OrderWhereInput = {};
  if (Number(userId)>0) {
    where.userId = Number(userId);
  }

  const searchorder = await prisma.order.findMany({
    skip: (pageNumber - 1) * pageSizeNumber,
    take: pageSizeNumber,
    where: where,
    orderBy: { [order]: direction },
    include: {
      user: true,
      order_detail: {
        include: { product: { include: { review:true, category: true } } },
      },
    },
  });

  const totalCuantity = await prisma.order.count({
    where: where,
  });

  res.status(200).json([totalCuantity, searchorder]);
});

/* backofficeRoutesOrders.get("/", async (req, res) => {
  //  const id = req.query.name;

  let allOrders = await prisma.order.findMany();
  if (allOrders) {
    res.status(200).send(allOrders);
  } else {
    res.status(404).send("error");
  }
}); */

backofficeRoutesOrders.get("/:id", async (req, res) => {
  const orderId = Number(req.params.id);

  const orderUnique = await prisma.order.findUnique({
    where: { id: orderId },
    include: { user: true },
  });
  if (orderUnique) {
    res.status(200).send(orderUnique);
  } else {
    res.status(404).send("error");
  }
});

backofficeRoutesOrders.put("/:id", async (req, res) => {
  const orderlId = Number(req.params.id);
  const { amount, status } = req.body;

  let orderToChange = await prisma.order.update({
    where: { id: orderlId },
    data: {
      amount: amount,
      status: status,
    },
  });

  res.status(200).json(orderToChange);
});

backofficeRoutesOrders.delete("/:id", async (req, res) => {
  //PROBAR CUANDO ESTE LISTA LA RUTA DE USER

  try {
    const orderId = Number(req.params.id);
    //const { name } = req.body;

    let orderToDelete = await prisma.order.delete({
      where: { id: orderId },
    });
    res.json(orderToDelete);
  } catch (error) {
    res.send(`No se pudo eliminar la orden, ${error}`);
  }
});

export default backofficeRoutesOrders;
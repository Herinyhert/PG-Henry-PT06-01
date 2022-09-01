import { Router } from "express";
import prisma from "../../../db";

const backofficeRoutesOrder = Router();

backofficeRoutesOrder.post("/", async (req, res) => {
  try {
    const { amount, status, userId } = req.body;

    const newOrder = await prisma.order.create({
      data: {
        amount: amount,
        status: status,
        userId: userId,
      },
    });

    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: `post Order fail ${error}` });
    return;
  }
});

backofficeRoutesOrder.get("/", async (req, res) => {
  //  const id = req.query.name;

  let allOrders = await prisma.order.findMany();
  if (allOrders) {
    res.status(200).send(allOrders);
  } else {
    res.status(404).send("error");
  }
});

backofficeRoutesOrder.get("/:id", async (req, res) => {
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

backofficeRoutesOrder.put("/:id", async (req, res) => {
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


backofficeRoutesOrder.delete("/:id", async (req, res) => {
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

export default backofficeRoutesOrder;

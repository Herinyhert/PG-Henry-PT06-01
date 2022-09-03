import { Router } from "express";
import { Express } from "express";
import prisma from "../../../db";

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  const { email, password, name, surname  } = req.body;
  if(!name || !surname){
    res.status(400).send("name y surname obligatorio");
  }
  if (!email || !password) {
    res.status(400).send("ingrese usuario y contraseña");
  }
  const trueUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  console.log(trueUser)
  if (!trueUser) {
    const newUser = await prisma.user.create({
      data: {
        name: name,
        surname: surname,
        email: email,
        password: password,
      },
    });
    res.status(200).send(newUser)
  }else{
    res.status(400).send("el usuario ya existe");
  }
});

authRouter.post("/signin", (req, res) => {
  res.status(200).send("signin");
});
export default authRouter;

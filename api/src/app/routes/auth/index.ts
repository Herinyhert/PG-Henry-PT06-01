import { Router } from "express";
import { Express } from "express";
import prisma from "../../../db";
import jwt from 'jsonwebtoken'
import config from '../../config/config'
const bcrypt = require("bcrypt");

const authRouter = Router();

export interface userInt {
  id: Number;
  name: string;
  surname: string;
  email: string;
  password: String;
  role: string;
}

function createToken (user: userInt){
 return jwt.sign({id: user.id, email: user.email, role: user.role}, config.jwtsecret)
}

authRouter.post("/signup", async (req, res) => {

  const { email, password, name, surname } = req.body;
  //hasheamos el password
  let salt = await bcrypt.genSalt(10);
  let passwordHash = await bcrypt.hash(password, salt);
  console.log(email)
  if (!name || !surname) {
    res.status(400).send("name y surname");
  }
  if (!email || !password) {
    res.status(400).send("ingrese usuario y contraseña");
  }
  const trueUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!trueUser) {
    const newUser = await prisma.user.create({
      data: {
        name: name,
        surname: surname,
        email: email,
        password: passwordHash,
      },
    });
    res.status(200).send(newUser);
  } else {
    res.status(400).send("el usuario ya existe");
  }
});

authRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password)
  if (!email || !password) {
    res.status(400).send("ingrese usuario y contraseña");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if(!user){
    res.status(400).send("el usuario no existe");
  }else{
    if(user.password === password){

      res.status(200).json({token: createToken(user)})
    }else{
      res.status(400).send("la contraseña no es valida");
    }
  }
});


export default authRouter;

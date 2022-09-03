import { Router } from 'express';
import prisma from '../../../db';

const userRoutes = Router();
const bcrypt = require('bcrypt');

userRoutes.get('/', async (req, res) => {
  try {
    const allUser = await prisma.user.findMany({});
    res.status(200).send(allUser);
  } catch (error) {
    res.send(400).send(error);
  }
});

export interface user {
  name: string;
  surname: string;
  email: string;
  username: String;
  password: String;
  state: Boolean;
}
userRoutes.post('/', async (req, res, next) => {
  const { name, surname, email, username, password } = req.body;
  //hasheamos el password
  let salt = await bcrypt.genSalt(10);
  let passwordHash = await bcrypt.hash(password, salt);
  /* let passwordHash = await bcryptjs.hash(password, 10); // hasheo pasword */
  let existsEmail = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  let exisUsername = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (existsEmail) {
    return res
      .status(400)
      .send('There is already a registered user with the email');
  } else if (exisUsername) {
    return res
      .status(400)
      .send('There is already a registered user with username');
  } else {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: name,
          surname: surname,
          email: email,
          username: username,
          password: passwordHash,
        },
      });
      res.status(200).send(newUser);
    } catch (error) {
      return next(error);
    }
  }
});

export default userRoutes;

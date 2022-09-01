import { Router } from 'express';
import prisma from '../../../db';

const userRoutes = Router();

userRoutes.get('/', async (req, res) => {
  const alluser = await prisma.user.findMany();

  alluser ? res.status(200).send(alluser) : res.send(400).send(alluser);
});

export default userRoutes;

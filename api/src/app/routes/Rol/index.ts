import { Prisma } from '@prisma/client';
import { Router } from 'express';
import prisma from '../../../db';

const backofficeRoutesRol = Router();

backofficeRoutesRol.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    if (typeof name !== 'string') {
      res.status(400).json({ message: `the 'rol' must be a string` });
      return;
    }

    const newRol = await prisma.role.create({
      data: {
        name: name,
      },
    });
    console.log('ACA ESTA', newRol);
    res.status(200).json(newRol);
  } catch (error) {
    res.status(400).json({ message: `post rol fail ${error}` });
    return;
  }
});
backofficeRoutesRol.get('/', async (req, res) => {
  //  const name = req.query.name;

  let allRoles = await prisma.role.findMany();
  if (allRoles) {
    res.status(200).send(allRoles);
  } else {
    res.status(404).send('error');
  }
});




backofficeRoutesRol.put("/:id", async (req, res) => {

  const rolId = Number(req.params.id);
  const { name } = req.body;

  let rolToChange = await prisma.role.update({
    where: { id: rolId },
    data: { name: name },
  });

  res.status(200).json(rolToChange);
});

backofficeRoutesRol.delete('/', async (req, res) => {
  //Ver porque no agarra id

  try {
    //const rolId = Number(req.params.id);
    const { name } = req.body;
    console.log('el id de rol------------' + name);
    let rolToDelete = await prisma.role.delete({
      where: { name: name },
    });

    //console.log("Se elimino el id ------------------", rolToDelete)
    res.json(rolToDelete);
  } catch (error) {
    res.send(`No se pudo eliminar el rol, ${error}`);
  }
});

export default backofficeRoutesRol;

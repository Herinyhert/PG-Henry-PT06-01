import { Router } from 'express';
import prisma from '../../../db';
import jwt, { JwtPayload } from 'jsonwebtoken';
import auth from '../../middlewares/passport';
const bcrypt = require('bcrypt');

const authRouter = Router();

export interface TokenPayload {
  id: Number;
  email: string;
  role: string;
}

function createToken({id,email,role}: TokenPayload) {
  return jwt.sign(
    { id: id, email: email, role: role },
    process.env.JWT_SECRETE || 'Abacabb22',
  );
}

authRouter.post('/signup', async (req, res) => {
  const { email, password, name, surname } = req.body;
  //hasheamos el password
  let salt = await bcrypt.genSalt(10);
  let passwordHash = await bcrypt.hash(password, salt);
  console.log(email);
  if (!name || !surname) {
    res.status(400).send('name y surname');
  }
  if (!email || !password) {
    res.status(400).send('ingrese usuario y contraseña');
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
    res.status(400).send('el usuario ya existe');
  }
});

authRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send('ingrese usuario y contraseña');
    return
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    res.status(400).send('el usuario no existe');
    return
  } else {
    // revisar el pasword------/
    const passworCorrecto = await bcrypt.compare(password, user.password);
    if (!passworCorrecto) {
      res.status(400).send('Password Incorrecto');
      return
    } else {
      res.status(200).json({token: createToken(user)})
    }
    /* if(user.password === password){

      res.status(200).json({token: createToken(user)})
    }else{
      res.status(400).send("la contraseña no es valida");
    } */
  }
});

authRouter.get('/google', auth.authenticate('google', {scope:['profile', 'email']}))

authRouter.get('/google/success', auth.authenticate('google',{session :false}), (req,res)=>{
  res.status(200).json({token: createToken(req.user as TokenPayload)})
})

export default authRouter;

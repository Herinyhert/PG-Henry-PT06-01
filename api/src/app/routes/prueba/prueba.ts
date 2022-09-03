import { Router } from "express";
import passport from "passport";

const pruebaRoutes = Router()

pruebaRoutes.get('/', passport.authenticate('jwt',{session :false}), (req, res)=>{
    res.send('ando')
} )

export default pruebaRoutes
import { Router } from "express";
import auth from "../../middlewares/passport";

const pruebaRoutes = Router()

pruebaRoutes.get('/', auth.authenticate('jwt',{session :false}), (req, res)=>{
    res.send('ando')
} )

export default pruebaRoutes
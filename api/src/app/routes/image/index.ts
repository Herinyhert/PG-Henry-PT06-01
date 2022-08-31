import { Router } from "express";
var cloudinary = require('cloudinary').v2;

const imageRoutes = Router();

cloudinary.config({
    cloud_name: 'doe8i28jh',
    api_key: '526329512755824',
    api_secret: 'vZdSWfjbS-ohvCkvEN8t7UW9S_E'
})


imageRoutes.post('/', async (req,res)=>{
    const { image }= req.body
    console.log(image)
    // const result = await cloudinary.v2.uploader.upload(image)
    // try{
    //     console.log(result)
    // }catch(error){
    //     res.status(404).send('no responde')
    // }
})

export default imageRoutes
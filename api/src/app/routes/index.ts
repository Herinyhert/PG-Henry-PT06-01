import Router from 'express';
import productRoutes from './product';
import categoryRoutes from './category';
import imageRoutes from './image';
<<<<<<< Updated upstream
=======
// import backofficeRoutesRol from './Rol';
>>>>>>> Stashed changes
import backofficeRoutesOrder from './Order/Order';
import userRoutes from './user';
import authRouter from './auth';
import pruebaRoutes from './prueba/prueba';

const router = Router();

router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/image', imageRoutes);
router.use('/user', userRoutes);
<<<<<<< Updated upstream
=======
// router.use('/backoffice/rol', backofficeRoutesRol);
>>>>>>> Stashed changes
router.use('/backoffice/order', backofficeRoutesOrder);
router.use('/auth', authRouter)
router.use('/prueba', pruebaRoutes)

export default router;

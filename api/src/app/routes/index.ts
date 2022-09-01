import Router from "express";
import productRoutes from "./product";
import categoryRoutes from "./category";
import imageRoutes from "./image";
import backofficeRoutes from "./Rol"

const router = Router();

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/image", imageRoutes);
router.use("/backoffice", backofficeRoutes);

export default router;

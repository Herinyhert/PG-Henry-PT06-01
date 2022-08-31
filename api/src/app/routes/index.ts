import Router from "express";
import productRoutes from "./product";
import categoryRoutes from "./category";
import imageRoutes from "./image"

const router = Router();

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/image", imageRoutes)

export default router;

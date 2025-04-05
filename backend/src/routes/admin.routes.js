import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createCategory } from "../controllers/category.controller.js";
import { addProduct } from "../controllers/product.controller.js";
const router = Router();

router
  .route("/add-category")
  .post(upload.single("categoryImage"), createCategory);

router.route("/add-product").post(
  upload.fields([
    {
      name: "productImages",
      maxCount: 5,
    },
  ]),
  addProduct
);

export default router;

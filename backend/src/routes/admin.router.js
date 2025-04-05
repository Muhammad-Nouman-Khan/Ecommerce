import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createCategory } from "../controllers/category.controller.js";
const router = Router();

router
  .route("/add-category")
  .post(upload.single("categoryImage"), createCategory);

export default router;

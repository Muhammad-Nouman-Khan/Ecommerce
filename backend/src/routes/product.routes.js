import { Router } from "express";
import {
  getProductsByCategory,
  getProductsForHomepage,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/home", getProductsForHomepage);
router.get("/category/:categoryId", getProductsByCategory);

export default router;

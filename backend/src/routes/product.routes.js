import { Router } from "express";
import {
  getAllProducts,
  getProductsByCategory,
  getProductsForHomepage,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/home", getProductsForHomepage);
router.get("/category/:categoryId", getProductsByCategory);
router.get("/all-products", getAllProducts);
export default router;

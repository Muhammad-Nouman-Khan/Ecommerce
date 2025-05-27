import { Router } from "express";
import {
  getAllProducts,
  getProductsByCategory,
  getProductsForHomepage,
  getProductById,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/home", getProductsForHomepage);
router.get("/category/:categoryId", getProductsByCategory);
router.get("/all-products", getAllProducts);
router.get("/:productId", getProductById);
export default router;

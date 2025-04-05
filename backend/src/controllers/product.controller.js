import { Product } from "../models/product.model.js";
import { Category } from "../models/category.model.js";
const getProductsForHomepage = async (req, res) => {
  try {
    const categories = await Category.find().lean();
    if (categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    const categoryProductData = await Promise.all(
      categories.map(async (category) => {
        const products = await Product.find({ category: category._id })
          .limit(4)
          .sort({ createdAt: -1 }) //Sort by most recent
          .select("name price images averageRating")
          .lean();

        return {
          categoryId: category._id,
          categoryName: category.name,
          products,
        };
      })
    );

    res.status(200).json(categoryProductData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch products for homepage",
      error: error.message,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const products = await Product.find({ category: categoryId });
    if (products.length === 0) {
      return res.status(404).json({
        message: "No products found",
      });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products by category",
      error: error.message,
    });
  }
};

export { getProductsForHomepage, getProductsByCategory };

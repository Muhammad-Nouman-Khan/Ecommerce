import { Category } from "../models/category.model.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      res.status(404).json({
        message: "No Categories Found",
      });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch categories",
      error,
    });
  }
};

export { getCategories };

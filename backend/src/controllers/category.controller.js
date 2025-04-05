import { Category } from "../models/category.model.js";
import { cleanupTempFile } from "../utils/cleanUp.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return res.status(404).json({
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
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      cleanupTempFile(req.file?.path);
      return res.status(400).json({
        message: "Name of Category is required!",
      });
    }
    const existing = await Category.findOne({ name });
    if (existing) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }
    const categoryImageLocalPath = req.file?.path;
    if (!categoryImageLocalPath) {
      return res.status(400).json({
        message: "Category Image is missing",
      });
    }
    const categoryImage = await uploadOnCloudinary(categoryImageLocalPath);
    if (!categoryImage.url) {
      return res.status(400).json({
        message: "Error while uploading the category image on cloudinary",
      });
    }
    const newCategory = new Category({
      name,
      categoryImage: categoryImage?.url,
    });
    await newCategory.save();
    res.status(201).json({
      newCategory,
      message: "New Category Created",
    });
  } catch (error) {
    console.error("Error Creating Category: ", error.message);
    res
      .status(500)
      .json({ message: "Failed to create category", error: error.message });
  }
};
export { getCategories, createCategory };

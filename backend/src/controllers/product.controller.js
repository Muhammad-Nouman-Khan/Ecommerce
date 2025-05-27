import { Product } from "../models/product.model.js";
import { Category } from "../models/category.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { cleanupTempFile } from "../utils/cleanUp.js";
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
    const products = await Product.find({ category: categoryId }).populate(
      "category"
    );
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

const addProduct = async (req, res) => {
  try {
    const { name, categoryName, price, description, stock } = req.body;

    if (!name || !categoryName || !price) {
      return res.status(400).json({
        message: "Name,Category Name, and Price are required!",
      });
    }
    const files = req.files?.productImages || [];
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      for (const file of files) {
        cleanupTempFile(file?.path);
      }
      return res.status(404).json({ message: "Category not found !" });
    }

    if (files.length < 1) {
      return res.status(400).json({
        message: "Atleast 1 product image is required!",
      });
    }
    if (files.length > 5) {
      return res
        .status(400)
        .json({ message: "You can upload a maximum of 5 product images!" });
    }

    const imageUrls = [];
    for (const file of files) {
      const uploadResult = await uploadOnCloudinary(file.path);
      if (!uploadResult) {
        return res
          .status(400)
          .json({ message: "Failed to upload image to Cloudinary" });
      }
      imageUrls.push(uploadResult.url);
    }
    const newProduct = new Product({
      name,
      category: category._id,
      price,
      images: imageUrls,
      description,
      stock,
    });
    await newProduct.save();
    res
      .status(201)
      .json({ product: newProduct, message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product : ", error.message);
    res
      .status(500)
      .json({ message: "Failed to add product", error: error.message });
  }
};

const getAllProducts = async (_, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch all products", error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: error.message });
  }
};

const searchProducts = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    }).populate("category");

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to search products",
      error: error.message,
    });
  }
};

export {
  getProductsForHomepage,
  getProductsByCategory,
  addProduct,
  getAllProducts,
  getProductById,
  searchProducts,
};

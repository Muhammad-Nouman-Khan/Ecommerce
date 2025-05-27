import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Star, Minus, Plus, ShoppingBag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/loading";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/${productId}`
        );
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => Math.min(prev + 1, product.stock));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleAddToCart = () => {
    console.log("Adding to cart:", { product, quantity });
  };

  if (loading) {
    return (
      <div className="bg-[#121212] min-h-screen">
        <Navbar />
        <Spinner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#121212] min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto p-4 text-white text-center py-20">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 h-[400px] flex items-center justify-center">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-white rounded-lg p-2 h-24 flex items-center justify-center transition-all ${
                      selectedImage === index
                        ? "ring-2 ring-blue-500"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="text-white space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 text-gray-400">
                <span>{product.category.name}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <span>{product.averageRating}</span>
                </div>
                <span>•</span>
                <span>{product.reviews?.length || 0} reviews</span>
              </div>
            </div>

            <div className="text-2xl font-bold text-blue-500">
              ${product.price}
            </div>

            <p className="text-gray-300">{product.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-300">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-gray-400">
                  {product.stock} items available
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

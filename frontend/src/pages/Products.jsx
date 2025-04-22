import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/all-products`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching all products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#121212] min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto p-4">
          <div className="text-white text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-white mb-10 mt-10">
          All Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              categoryName={product.category.name}
            />
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-white text-center py-10">No products found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;

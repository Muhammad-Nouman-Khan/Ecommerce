import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
const Products = () => {
  const [HomePageProducts, setHomePageProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomePageProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/home`
        );
        console.log(res.data);
        setHomePageProducts(res.data);
      } catch (error) {
        console.log("Error fetching products for homepage : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHomePageProducts();
  }, []);

  return (
    <div className="w-full mt-20">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-white mb-10">
          Featured Products
        </h1>

        {HomePageProducts.map((homepageproduct) => {
          return (
            <div key={homepageproduct.categoryId} className="mb-16">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-bold text-xl">
                  {homepageproduct.categoryName}
                </h2>
                <button className="text-blue-500 hover:text-blue-400">
                  View All &gt;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {homepageproduct.products.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    categoryName={homepageproduct.categoryName}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* {categories.map((category) => {
          const products = productsByCategory[category.name] || [];
          if (products.length === 0) return null;

          return (
            <div key={category.id} className="mb-16">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-bold text-xl">
                  {category.name}
                </h2>
                <button className="text-blue-500 hover:text-blue-400">
                  View All &gt;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import { categories, products } from "../constants/constants";
import ProductCard from "./ProductCard";

const Products = () => {
  const [productsByCategory, setProductByCategory] = useState({});

  useEffect(() => {
    const groupedProducts = {};
    categories.forEach((category) => {
      groupedProducts[category.name] = products
        .filter((product) => product.category === category.name)
        .slice(0, 4); // First 4 products
    });
    setProductByCategory(groupedProducts);
  }, []);

  return (
    <div className="w-full mt-20">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-white mb-10">
          Featured Products
        </h1>

        {categories.map((category) => {
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
        })}
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import { categories } from "../constants/constants";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <div className="w-full mt-20">
      <div className="container max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-white">Categories</h1>
        <p className="text-gray-500  mt-2">
          Browse our wide range of product categories and find exactly what you
          need
        </p>
        <button className="text-blue-600 hover:text-blue-500 mt-3">
          See All Categories
        </button>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

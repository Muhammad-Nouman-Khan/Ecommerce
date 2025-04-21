import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );

        setCategories(res.data);
      } catch (error) {
        console.log("Error Fetching categories : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="w-full mt-20">
      <div className="container max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-white">Categories</h1>
        <p className="text-gray-500  mt-2">
          Browse our wide range of product categories and find exactly what you
          need
        </p>

        {loading ? (
          <p className="text-white mt-4">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

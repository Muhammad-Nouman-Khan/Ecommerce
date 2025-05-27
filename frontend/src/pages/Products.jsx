import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import SidebarFilters from "../components/SidebarFilters";
import Spinner from "../components/loading";

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let res;
        if (searchQuery) {
          res = await axios.get(
            `${
              import.meta.env.VITE_API_URL
            }/products/search?query=${encodeURIComponent(searchQuery)}`
          );
        } else if (selectedCategory) {
          res = await axios.get(
            `${
              import.meta.env.VITE_API_URL
            }/products/category/${selectedCategory}`
          );
        } else {
          res = await axios.get(
            `${import.meta.env.VITE_API_URL}/products/all-products`
          );
        }
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    let filtered = [...products];
    if (minPrice !== "") {
      filtered = filtered.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice !== "") {
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    }
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, products]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setMinPrice("");
    setMaxPrice("");
  };

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-white mb-10 mt-10">
          {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <SidebarFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceChange={handlePriceChange}
          />
          <div className="flex-1">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      categoryName={product.category.name}
                    />
                  ))}
                </div>
                {filteredProducts.length === 0 && (
                  <div className="text-white text-center py-10">
                    {searchQuery
                      ? `No products found matching "${searchQuery}"`
                      : "No products found matching your filters."}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

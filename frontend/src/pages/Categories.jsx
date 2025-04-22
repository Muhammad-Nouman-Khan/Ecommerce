import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const CategoriesPage = () => {
  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
};

export default CategoriesPage;

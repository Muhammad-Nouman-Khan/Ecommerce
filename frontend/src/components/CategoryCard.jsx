import React from "react";

const CategoryCard = ({ category }) => {
  const { name, image } = category;

  return (
    <div className="relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 z-10"></div>
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;

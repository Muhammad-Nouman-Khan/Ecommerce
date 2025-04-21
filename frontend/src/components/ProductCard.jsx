import React from "react";
import { Star, ShoppingBag } from "lucide-react";

const ProductCard = ({ product, categoryName }) => {
  const { name, price, images, averageRating } = product;

  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600">
      <div className="relative bg-white">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-72 object-contain  "
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-1">{categoryName}</div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-white">
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
            <span className="text-sm font-medium text-white">
              {averageRating}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-white">${price}</span>
          </div>
          <button className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition-colors">
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

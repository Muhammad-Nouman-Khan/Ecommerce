import React, { useState } from "react";
import axios from "axios";
import { SlidersHorizontal, ChevronUp, ChevronDown } from "lucide-react";

const SidebarFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
}) => {
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <div className="bg-zinc-800 pt-6 px-6 rounded-lg w-full md:w-64 h-fit">
      <button
        className="w-full flex items-center justify-between text-xl font-semibold text-white mb-6 gap-2 focus:outline-none"
        onClick={() => setFiltersOpen((open) => !open)}
        aria-label="Toggle Filters"
        style={{ userSelect: "none" }}
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal /> Filters
        </span>
        {filtersOpen ? (
          <ChevronUp className="transition-transform duration-300" />
        ) : (
          <ChevronDown className="transition-transform duration-300" />
        )}
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          filtersOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mb-6">
          <h3 className="text-lg font-medium text-white mb-3">Category</h3>
          <div className="flex flex-col gap-2">
            <button
              className={`text-left px-3 py-2 rounded ${
                !selectedCategory
                  ? "bg-blue-900 text-white"
                  : "text-white hover:bg-zinc-700"
              }`}
              onClick={() => onCategoryChange(null)}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                className={`text-left px-3 py-2 rounded ${
                  selectedCategory === category._id
                    ? "bg-blue-900 text-white"
                    : "text-white hover:bg-zinc-700"
                }`}
                onClick={() => onCategoryChange(category._id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-white mb-3">Price Range</h3>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              min={0}
              onChange={(e) => onPriceChange(e.target.value, maxPrice)}
              className="w-20 px-2 py-1 rounded bg-zinc-700 text-white focus:outline-none"
            />
            <span className="text-white">-</span>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              min={0}
              onChange={(e) => onPriceChange(minPrice, e.target.value)}
              className="w-20 px-2 py-1 rounded bg-zinc-700 text-white focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;

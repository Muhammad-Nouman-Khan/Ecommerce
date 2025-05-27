import { Menu, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-b-gray-700 sticky top-0 z-50 bg-zinc-900">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="title text-2xl font-bold text-white">
          nomify
        </Link>
        <div className="hidden md:flex gap-5 text-white">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-500">
            Products
          </Link>
          <Link to="/categories" className="hover:text-blue-500">
            Categories
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="hidden md:block w-64">
            <SearchBar />
          </div>
          <User className="h-6 w-6 text-white cursor-pointer hover:text-blue-500" />
          <div className="relative">
            <ShoppingBag className="h-5 w-5 text-white cursor-pointer hover:text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-semibold shadow-md">
              0
            </span>
          </div>

          <button
            className="text-white hover:text-blue-500 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full bg-zinc-800 text-white p-6 flex flex-col gap-6 origin-top shadow-lg"
          >
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-500">
              Products
            </Link>
            <Link to="/categories" className="hover:text-blue-500">
              Categories
            </Link>

            <div className="w-full">
              <SearchBar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

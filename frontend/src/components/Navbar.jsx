import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-b-gray-700 sticky top-0 z-50 bg-zinc-900">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <h1 className="title text-2xl font-bold text-white">nomify</h1>
        <div className="hidden md:flex gap-5 text-white">
          <h1 className="cursor-pointer hover:text-blue-500">Home</h1>
          <h1 className="cursor-pointer hover:text-blue-500">Products</h1>
          <h1 className="cursor-pointer hover:text-blue-500">Categories</h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Search className="h-5 w-5 hidden md:flex text-white cursor-pointer hover:text-blue-500" />
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
            <h1 className="cursor-pointer hover:text-blue-500">Home</h1>
            <h1 className="cursor-pointer hover:text-blue-500">Products</h1>
            <h1 className="cursor-pointer hover:text-blue-500">Categories</h1>

            <div className="relative flex items-center">
              <Search className="absolute left-3 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

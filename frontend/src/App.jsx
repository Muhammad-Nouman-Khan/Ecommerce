import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import Products from "./pages/Products";

export default function App() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:categoryId"
            element={<CategoryProducts />}
          />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

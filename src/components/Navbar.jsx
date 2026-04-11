import { useCart } from "../context/CartContext";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  // 👉 total items count (not just array length)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-semibold tracking-wide cursor-pointer"
        >
          SK Jewelry
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <p onClick={() => navigate("/")} className="cursor-pointer hover:text-gray-500 transition">Home</p>
          <p className="cursor-pointer hover:text-gray-500 transition">Shop</p>
          <p onClick={() => navigate("/new-arrivals")} className="cursor-pointer hover:text-gray-500 transition">New Arrivals</p>
          <p className="cursor-pointer hover:text-gray-500 transition">Contact</p>
        </nav>

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer group"
        >
          <FiShoppingBag size={20} />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-[2px] rounded-full">
              {totalItems}
            </span>
          )}

          <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-110 transition bg-gray-100 -z-10"></span>
        </div>

      </div>
    </header>
  );
}
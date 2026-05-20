import { useCart } from "../context/CartContext";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="z-50 bg-white border-b border-gray-300">

      <div className="relative max-w-7xl mx-auto px-4 h-[70px] flex items-center justify-between">

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="
            absolute 
            left-1/2 md:left-4 
            top-1/2 
            -translate-x-1/2 md:translate-x-0 
            -translate-y-1/2 
            cursor-pointer 
            z-50
          "
        >
          <img
            src="/images/elegant_logo.png"
            alt="Elegant Jewellery By Riza"
            className="h-18 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium ml-52 tracking-wide uppercase">
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            Home
          </p>

          <p
            onClick={() => {
              const section = document.getElementById("collections");

              if (location.pathname !== "/") {
                navigate("/");

                setTimeout(() => {
                  document
                    .getElementById("collections")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                section?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            Collections
          </p>

          <p
            onClick={() => navigate("/new-arrivals")}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            New Arrivals
          </p>

          <p
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            Contact Us
          </p>
        </nav>

        {/* Cart */}
        <div
          onClick={() => {
            if (location.pathname === "/cart") {
              navigate(-1);
            } else {
              navigate("/cart");
            }
          }}
          className="relative cursor-pointer group ml-auto z-50"
        >
          <FiShoppingBag size={22} />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-[2px] rounded-full">
              {totalItems}
            </span>
          )}
        </div>

      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-[260px] h-full bg-white z-50 p-6 flex flex-col gap-6">

            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={24} />
              </button>
            </div>

            {/* Mobile Logo */}
            <div
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <img
                src="/images/elegant_logo.png"
                alt="Elegant Jewellery By Riza"
                className="h-14 w-auto object-contain"
              />
            </div>

            {/* Links */}
            <p
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="cursor-pointer uppercase tracking-wide"
            >
              Home
            </p>

            <p
              onClick={() => {
                setMenuOpen(false);
                const section = document.getElementById("collections");

                if (location.pathname !== "/") {
                  navigate("/");

                  setTimeout(() => {
                    document
                      .getElementById("collections")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  section?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="cursor-pointer uppercase tracking-wide hover:text-gray-500 transition"
            >
              Collections
            </p>

            <p
              onClick={() => {
                navigate("/new-arrivals");
                setMenuOpen(false);
              }}
              className="cursor-pointer uppercase tracking-wide"
            >
              New Arrivals
            </p>

            <p
              onClick={() => {
                navigate("/contact");
                setMenuOpen(false);
              }}
              className="cursor-pointer uppercase tracking-wide"
            >
              Contact Us
            </p>

          </div>
        </>
      )}

    </header>
  );
}
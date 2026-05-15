import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);

  if (!product) return <p className="p-6">Product not found</p>;

  // 👉 Similar products (same category, exclude current)
  const similarProducts = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };


  

  return (
    <div className="px-6 py-10">

      {/* Top Section */}
      <div className="md:flex gap-10">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            className="w-full h-[300px] md:h-[400px] object-cover rounded"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 mt-6 md:mt-0">

          <h1 className="text-2xl font-heading">
            {product.name}
          </h1>

          <p className="mt-2 text-lg">
            Rs. {product.price}.00
          </p>

          {/* Highlights */}
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>✨ Premium quality</p>
            <p>🚚 Delivery charges: ₹80</p>
            <p>⏱️ Delivery in 5–7 days</p>
            <p>🎨 For more color options, contact us directly on WhatsApp.</p>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm">Quantity:</span>

            <div className="flex items-center border rounded">
              <button
                onClick={decrease}
                className="px-3 py-1 hover:bg-gray-100"
              >
                -
              </button>

              <span className="px-4">{quantity}</span>

              <button
                onClick={increase}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">

            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
              }}
              className="border border-black px-5 py-2 rounded hover:bg-black hover:text-white transition"
            >
              Add to Cart
            </button>

            <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                  }
                  navigate("/cart");
                }}
                className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
              >
                Buy Now
            </button>

          </div>

        </div>
      </div>

      {/* 🔥 Similar Products */}
      <div className="mt-16">

        <h2 className="text-lg font-semibold mb-6">
          Similar Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {similarProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="cursor-pointer hover:scale-105 transition duration-300"
            >

              <img
                src={item.image}
                className="w-full h-[200px] object-cover"
              />

              <p className="text-xs mt-2 text-center">
                {item.name}
              </p>

              <p className="text-xs text-gray-600 text-center">
                Rs. {item.price}.00
              </p>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
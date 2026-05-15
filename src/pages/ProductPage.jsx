import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/products";
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

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  // Similar products
  const similarProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4);

  const increase = () => setQuantity((q) => q + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  return (
    <div className="px-5 py-8 max-w-6xl mx-auto">

      {/* Top Section */}
      <div className="md:flex gap-10">

        {/* Product Image */}
        <div className="md:w-1/2">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[320px] md:h-[500px] object-cover rounded-lg"
          />

        </div>

        {/* Product Details */}
        <div className="md:w-1/2 mt-7 md:mt-0">

          {/* Product Name */}
          <h1 className="text-[26px] md:text-[30px] font-light tracking-wide leading-tight">
            {product.name}
          </h1>

          {/* Price */}
          <p className="mt-3 text-lg">
            ₹ {product.price}.00
          </p>

          {/* Highlights */}
          <div className="mt-5 space-y-2 text-[13px] text-gray-600 leading-6">

            <p>✨ Premium quality jewellery</p>

            <p>🚚 Delivery charges: ₹80</p>

            <p>⏱️ Delivery within 5–7 business days</p>

            <p>
              🎨 For more colour options & custom
              orders, contact us directly on WhatsApp.
            </p>

          </div>

          {/* Quantity */}
          <div className="mt-7">

            <p className="text-[13px] mb-2 tracking-wide">
              Quantity
            </p>

            <div className="w-[160px] h-[50px] border border-gray-400 flex items-center justify-between px-5 rounded-sm">

              <button
                onClick={decrease}
                className="text-[28px] font-light text-gray-600 hover:text-black transition"
              >
                −
              </button>

              <span className="text-base font-light">
                {quantity}
              </span>

              <button
                onClick={increase}
                className="text-[28px] font-light text-gray-600 hover:text-black transition"
              >
                +
              </button>

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-7 space-y-3">

            {/* Add to Cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
              }}
              className="w-full border-2 border-black rounded-full py-3 text-[17px] font-light tracking-wide hover:bg-black hover:text-white transition duration-300"
            >
              Add to cart
            </button>

            {/* Buy Now */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }

                navigate("/cart");
              }}
              className="w-full bg-black text-white rounded-full py-3 text-[17px] font-light tracking-wide hover:bg-gray-900 transition duration-300"
            >
              Buy it now
            </button>

          </div>

        </div>

      </div>

      {/* Similar Products */}
      <div className="mt-14">

        <h2 className="text-lg font-light mb-6 tracking-wide">
          Similar Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {similarProducts.map((item) => (

            <div
              key={item.id}
              onClick={() =>
                navigate(`/product/${item.id}`)
              }
              className="cursor-pointer group"
            >

              <div className="overflow-hidden rounded-lg">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] md:h-[250px] object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <p className="mt-3 text-sm text-center tracking-wide">
                {item.name}
              </p>

              <p className="text-sm text-gray-600 text-center mt-1">
                ₹ {item.price}.00
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
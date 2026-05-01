import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

export default function CollectionPage() {
  const { type } = useParams();
  const navigate = useNavigate(); // ✅ added

  let filteredProducts = [];
  let title = "";

  if (type === "best-sellers") {
    filteredProducts = products.filter((p) => p.isBestSeller);
    title = "Bestsellers";
  } else if (type === "new-arrivals") {
    filteredProducts = products.filter((p) => p.isNew);
    title = "New Arrivals";
  }

  return (
    <div className="px-6 py-10">

      {/* Title */}
      <h1 className="text-4xl font-semibold mb-6">
        {title}
      </h1>

      {/* No products */}
      {filteredProducts.length === 0 && (
        <p className="text-sm text-gray-500 text-center">
          No products found
        </p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)} // ✅ redirect
            className="cursor-pointer group"
          >

            {/* Image */}
            <img
              src={item.image}
              className="w-full h-[220px] object-cover transition duration-300 group-hover:scale-105"
            />

            {/* Info */}
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
  );
}
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NewArrivalsPage() {

  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="px-6 py-10">
      <h1 className="text-lg font-semibold mb-6">
        New Arrivals
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}   // 👈 ADD THIS
            className="cursor-pointer"
          >
            <img
              src={item.image}
              className="w-full h-[220px] object-cover"
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
  );
}
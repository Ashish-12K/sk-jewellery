import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function NewArrivals() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md tracking-widest font-semibold">
          NEW ARRIVALS
        </h2>

        <p
          onClick={() => navigate("/new-arrivals")}
          className="text-xs cursor-pointer hover:underline"
        >
          VIEW ALL
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products
          .filter((item) => item.isNew)
          .slice(0, 8)
          .map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}   // 👈 ADD THIS
              className="cursor-pointer hover:scale-105 transition duration-300"
            >

              <img
                src={item.image}
                className="w-full h-[220px] md:h-[260px] object-cover"
              />

              <div className="mt-2 text-center">
                <p className="text-xs">{item.name}</p>

                <p className="text-xs text-gray-600">
                  Rs. {item.price}.00
                </p>
              </div>

            </div>
          ))}
      </div>

    </section>
  );
}
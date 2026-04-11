import { useNavigate } from "react-router-dom";

export default function BestSellerBanner() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[300px] md:h-[450px] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/BS/BSBanner.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Bestsellers
        </h2>

        <p className="mt-2 text-sm md:text-base max-w-md mx-auto">
          Discover the products our customers love the most.
        </p>

        <button
          onClick={() => navigate("/collection/best-sellers")}
          className="mt-4 border border-gray-300 text-white  px-5 py-2 rounded hover:bg-gray-700 hover:border-black transition duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
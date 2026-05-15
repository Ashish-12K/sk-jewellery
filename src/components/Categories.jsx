const categories = [
  // { name: "Necklace", image: "/images/Necklace/necklace1.jpeg", slug: "necklace" },
  { name: "Bracelet", image: "/images/Bracelets/Bracelet2.png", slug: "bracelets" },
  // { name: "Earring", image: "/images/Earring/Earring1.jpeg", slug: "earring" },
  // { name: "Ring", image: "/images/Rings/Ring1.jpg", slug: "rings" },
  { name: "Bangles", image: "/images/Bangle/Bangle1.png", slug: "bangle" },
  { name: "Watches", image: "/images/Watch/w1.png", slug: "watch" },
];
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section id="collections" className="px-4 py-10">
      <h2 className="text-md text-md tracking-widest font-semibold mb-6">
        SHOP BY COLLECTIONS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${item.slug}`)}   // 👈 MAIN LINE
            className="relative group cursor-pointer overflow-hidden rounded"
          >
            <img
              src={item.image}
              className="w-full h-[180px] md:h-[400px] object-cover transition duration-300 group-hover:scale-105"
            />

            <span className="absolute bottom-2 right-2 bg-white text-xs px-2 py-1 rounded shadow">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
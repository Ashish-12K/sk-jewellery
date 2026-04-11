const categories = [
  { name: "Necklace", image: "/images/Necklace/necklace1.jpeg", slug: "necklace" },
  { name: "Bracelet", image: "/images/Bracelets/Bracelet1.jpeg", slug: "bracelets" },
  { name: "Earring", image: "/images/Earring/Earring1.jpeg", slug: "earring" },
  { name: "Ring", image: "/images/Rings/Ring1.jpg", slug: "rings" },
  { name: "Anklet", image: "/images/Anklet/anklet1.jpg", slug: "anklet" },
  { name: "Nose Pin", image: "/images/NosePin/nosepin1.jpg", slug: "nosepin" },
];
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Shop by collection
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
              className="w-full h-[180px] md:h-[420px] object-cover transition duration-300 group-hover:scale-105"
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
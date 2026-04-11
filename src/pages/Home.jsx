import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import BestSellerBanner from "../components/BestSellerBanner.jsx";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <Categories />
      <NewArrivals />
      <BestSellerBanner />
      <FooterSection />
    </div>
  );
}
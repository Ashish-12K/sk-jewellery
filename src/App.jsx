import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import CollectionPage from "./pages/CollectionPage";   // 👈 ADD THIS
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderSuccess from "./pages/OrderSuccess";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPage from "./pages/PrivacyPage";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  return (
    <Router>
      <AnnouncementBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />

        {/* 👇 ADD THIS ROUTE */}
        <Route path="/collection/:type" element={<CollectionPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
import { useLocation } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

export default function OrderSuccess() {
  const { state } = useLocation();

  const {
    cart = [],
    total = 0,
    paymentId = "",
    customer = {},
  } = state || {};

  // Create WhatsApp message
  let message = "Hello, I placed an order:\n\n";

  // Products
  cart.forEach((item) => {
    message += `Product: ${item.name}\n`;
    message += `Qty: ${item.quantity}\n`;
    message += `Price: ₹${item.price}\n\n`;
  });

  // ✅ Updated Customer Info
  message += `Name: ${customer.name}\n`;
  message += `Phone: ${customer.phone}\n`;

  message += `Address: ${customer.house}, ${customer.street}\n`;
  message += `${customer.city}, ${customer.state}, ${customer.country} - ${customer.pincode}\n\n`;

  message += `Total: ₹${total}\n`;
  message += `Payment ID: ${paymentId}`;

  const whatsappURL = `https://wa.me/919004188574?text=${encodeURIComponent(message)}`;

  return (
    <div className="px-6 py-20 text-center max-w-xl mx-auto">

      <h1 className="text-2xl font-semibold mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="text-gray-600 mb-8">
        Click below to send your order details to confirm.
      </p>

      {/* WhatsApp Button */}
      <button
        onClick={() => window.open(whatsappURL, "_blank")}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 cursor-pointer transition"
      >
        Send Order Info via WhatsApp
      </button>

      {/* Important Note */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-red-500">
        <FiAlertCircle size={18} />
        <p>
          Sending order details via WhatsApp is required to confirm your order.
        </p>
      </div>

    </div>
  );
}
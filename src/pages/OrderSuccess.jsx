import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { cart = [], total = 0 } = state || {};

  // Create WhatsApp message
  let message = "Hello, I placed an order:\n\n";

  cart.forEach((item) => {
    message += `Product: ${item.name}\n`;
    message += `Qty: ${item.quantity}\n`;
    message += `Price: ₹${item.price}\n\n`;
  });

  message += `Total: ₹${total}`;

  const whatsappURL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;

  return (
    <div className="px-6 py-20 text-center">

      <h1 className="text-2xl font-semibold mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="text-gray-600 mb-6">
        Click below to send your order details to confirm.
      </p>

      <div className="flex flex-col items-center gap-4">

        <button
          onClick={() => window.open(whatsappURL, "_blank")}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Send Order Info via WhatsApp
        </button>

        <button
          onClick={() => navigate("/")}
          className="text-sm underline"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}
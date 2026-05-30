import { useLocation } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";
import { useRef, useEffect } from "react";
import * as htmlToImage from "html-to-image";

export default function OrderSuccess() {
  const { state } = useLocation();
  const orderRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    cart = [],
    total = 0,
    customer = {},
  } = state || {};

  const orderDate = new Date();

  const formattedDateTime = `${orderDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })} ${orderDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  let message = "🛍️ New Order Details\n\n";

  cart.forEach((item) => {
    message += `• ${item.name} (Qty: ${item.quantity}) - ₹${item.price}\n`;
  });

  message += `\n👤 Name: ${customer.name}`;
  message += `\n📞 Phone: ${customer.phone}`;
  message += `\n🏠 Address: ${customer.house}, ${customer.street}`;
  message += `\n${customer.city}, ${customer.state}, ${customer.country} - ${customer.pincode}`;
  message += `\n\n💰 Total: ₹${total}`;
  message += `\n💳 Payment Method: UPI`;
  message += `\n📅 Date & Time: ${formattedDateTime}`;

  const whatsappURL = `https://wa.me/919026187747?text=${encodeURIComponent(
    message
  )}`;

  const downloadImage = async () => {
    if (!orderRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(orderRef.current);

      const link = document.createElement("a");
      link.download = "order-summary.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error generating image", err);
    }
  };

  return (
    <div className="px-6 py-20 max-w-2xl mx-auto text-center">

      <h1 className="text-2xl font-semibold mb-4">
        Order Submitted Successfully 🎉
      </h1>

      <p className="text-gray-600 mb-6">
        Download your order details and send them via WhatsApp to confirm your order.
      </p>

      {/* Order Summary */}
      <div
        ref={orderRef}
        className="border rounded-lg p-6 text-left shadow-sm bg-white"
      >
        <h2 className="font-semibold mb-4 text-lg">
          Order Summary
        </h2>

        {/* Products */}
        <div className="space-y-2 mb-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm"
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        {/* Customer Info */}
        <div className="text-sm space-y-1">
          <p>
            <strong>Name:</strong> {customer.name}
          </p>

          <p>
            <strong>Phone:</strong> {customer.phone}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {customer.house}, {customer.street},{" "}
            {customer.city}, {customer.state},{" "}
            {customer.country} - {customer.pincode}
          </p>
        </div>

        <hr className="my-4" />

        {/* Payment */}
        <div className="text-sm space-y-1">
          <p>
            <strong>Total:</strong> ₹{total}
          </p>

          <p>
            <strong>Payment Method:</strong> UPI
          </p>

          <p>
            <strong>Date & Time:</strong>{" "}
            {formattedDateTime}
          </p>
        </div>

        <hr className="my-4" />

        {/* WhatsApp Info */}
        <div className="text-sm text-center bg-gray-50 p-3 rounded">
          <p className="font-normal">
            Download your order details and send them via WhatsApp to confirm your order.
          </p>

          <p className="text-gray-800 font-semibold">
            WhatsApp: +91 90261 87747
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3">

        <button
          onClick={downloadImage}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Download Order Details
        </button>

        <button
          onClick={() => window.open(whatsappURL, "_blank")}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Send Via WhatsApp
        </button>

      </div>

      {/* Note */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-red-500">
        <FiAlertCircle size={18} />

        <p>
          Payment screenshot is optional. However, sharing it on WhatsApp can help us verify your payment and dispatch your order faster.
        </p>
      </div>

    </div>
  );
}
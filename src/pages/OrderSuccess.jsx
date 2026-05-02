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
    paymentId = "",
    customer = {},
  } = state || {};

  // 🕒 Date & Time (NO COMMA FORMAT)
  const orderDate = new Date();

  const formattedDateTime = `${orderDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })} ${orderDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  // WhatsApp message
  let message = "Hello, I placed an order:\n\n";

  cart.forEach((item) => {
    message += `• ${item.name} (Qty: ${item.quantity}) - ₹${item.price}\n`;
  });

  message += `\nName: ${customer.name}`;
  message += `\nPhone: ${customer.phone}`;
  message += `\nAddress: ${customer.house}, ${customer.street}`;
  message += `\n${customer.city}, ${customer.state}, ${customer.country} - ${customer.pincode}`;
  message += `\n\nTotal: ₹${total}`;
  message += `\nPayment ID: ${paymentId}`;
  message += `\nDate & Time: ${formattedDateTime}`;

  const whatsappURL = `https://wa.me/919004188574?text=${encodeURIComponent(message)}`;

  // 📸 Download image
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
        Order Placed Successfully 🎉
      </h1>

      <p className="text-gray-600 mb-6">
        Confirm your order using WhatsApp.
      </p>

      {/* 📦 ORDER SUMMARY */}
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
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price}</span>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        {/* Customer Info */}
        <div className="text-sm space-y-1">
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p>
            <strong>Address:</strong> {customer.house}, {customer.street}, {customer.city}, {customer.state}, {customer.country} - {customer.pincode}
          </p>
        </div>

        <hr className="my-4" />

        {/* Payment */}
        <div className="text-sm space-y-1">
          <p><strong>Total:</strong> ₹{total}</p>
          <p><strong>Payment ID:</strong> {paymentId}</p>
          <p><strong>Date & Time:</strong> {formattedDateTime}</p>
        </div>

        <hr className="my-4" />

        {/* WhatsApp Info */}
        <div className="text-sm text-center bg-gray-50 p-3 rounded">
          <p className="font-normal">
            Send this image to confirm your order
          </p>
          <p className="text-gray-800 font-semibold">
            WhatsApp: +91 90041 88574
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3">

        <button
          onClick={() => window.open(whatsappURL, "_blank")}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Send via WhatsApp
        </button>

        <button
          onClick={downloadImage}
          className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white transition"
        >
          Download Order Image
        </button>

      </div>

      {/* Note */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-red-500">
        <FiAlertCircle size={18} />
        <p>
          Sending order details via WhatsApp is mandatory to confirm your order.
        </p>
      </div>

    </div>
  );
}
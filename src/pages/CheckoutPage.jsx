import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryCharge = 80;
  const finalTotal = total + deliveryCharge;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    // ✅ Validation
    for (let key in form) {
      if (!form[key]) {
        alert("Please fill all details");
        return;
      }
    }

    const options = {
      key: "rzp_test_SbORRPRK2LfG2O",
      amount: finalTotal * 100,
      currency: "INR",

      name: "SK Jewelry",
      description: "Order Payment",

      handler: function (response) {
        const paymentId = response.razorpay_payment_id;

        const currentCart = [...cart];

        clearCart();

        navigate("/order-success", {
          state: {
            cart: currentCart,
            total: finalTotal,
            paymentId,
            customer: form,
          },
        });
      },

      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">

      {/* ✅ Title Updated */}
      <h1 className="text-xl font-semibold mb-6 border-b pb-2 inline-block">
        Delivery Details
      </h1>

      {/* Form */}
      <div className="space-y-4">

        <input
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* ✅ Split Address */}
        <input
          placeholder="House No / Flat No"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, house: e.target.value })}
        />

        <input
          placeholder="Street / Area"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, street: e.target.value })}
        />

        <input
          placeholder="City"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />

        <input
          placeholder="State"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, state: e.target.value })}
        />

        <input
          placeholder="Country"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, country: e.target.value })}
        />

        <input
          placeholder="Pincode"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, pincode: e.target.value })}
        />

      </div>

      {/* Summary */}
      <div className="mt-8 border-t pt-6 space-y-2">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {total}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Rs. 80</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>Rs. {finalTotal}</span>
        </div>

        <button
          onClick={handlePayment}
          className="mt-4 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Pay Now
        </button>

      </div>

    </div>
  );
}
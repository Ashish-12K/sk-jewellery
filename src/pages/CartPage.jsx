import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();
    const navigate = useNavigate();
  // ✅ Razorpay handler
  const handlePayment = () => {
    const options = {
      key: "rzp_test_SbORRPRK2LfG2O",  // 👈 replace with your test key
      amount: total * 100, // ₹ → paise
      currency: "INR",

      name: "SK Jewelry",
      description: "Order Payment",

      handler: function (response) {
  const paymentId = response.razorpay_payment_id;

  navigate("/order-success", {
    state: {
      cart,
      total,
      paymentId,
    },
  });
},

      prefill: {
        name: "Customer",
        contact: "9999999999",
      },

      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (cart.length === 0) {
    return <p className="p-6">Your cart is empty</p>;
  }

  return (
    <div className="px-6 py-10">

      <h1 className="text-xl font-semibold mb-6">
        Your Cart
      </h1>

      {/* Items */}
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 border-b pb-4">

            <img
              src={item.image}
              className="w-[80px] h-[80px] object-cover"
            />

            <div className="flex-1">
              <p className="text-sm">{item.name}</p>
              <p className="text-sm text-gray-600">
                Rs. {item.price}
              </p>
              <p className="text-sm">
                Qty: {item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500"
            >
              Remove
            </button>

          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-10 border-t pt-6">

        <h2 className="text-lg font-semibold">
          Total: Rs. {total}
        </h2>

        {/* ✅ Checkout button */}
        <button
          onClick={handlePayment}
          className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Checkout
        </button>

      </div>

    </div>
  );
}
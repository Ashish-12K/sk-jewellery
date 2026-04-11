import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    total,
    clearCart
  } = useCart();

  const navigate = useNavigate();

  const deliveryCharge = 80;
  const finalTotal = total + deliveryCharge;

  // ✅ Razorpay handler
  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: "rzp_test_SbORRPRK2LfG2O",
      amount: finalTotal * 100,
      currency: "INR",

      name: "SK Jewelry",
      description: "Order Payment",

      handler: function (response) {
        const paymentId = response.razorpay_payment_id;

        // ✅ Save current cart before clearing
        const currentCart = [...cart];

        // ✅ Clear cart
        clearCart();

        // ✅ Redirect
        navigate("/order-success", {
          state: {
            cart: currentCart,
            total: finalTotal,
            paymentId,
          },
        });
      },

      modal: {
        ondismiss: function () {
          console.log("Payment popup closed");
        },
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
    <div className="px-6 py-10 max-w-4xl mx-auto">

      <h1 className="text-xl font-semibold mb-6">
        Your Cart
      </h1>

      {/* Items */}
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b pb-4 items-center"
          >

            {/* Image */}
            <img
              src={item.image}
              className="w-[80px] h-[80px] object-cover rounded"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">
                Rs. {item.price}
              </p>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 border"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 border"
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500"
            >
              Remove
            </button>

          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10  border-t-3 pt-6 space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {total}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Rs. {deliveryCharge}</span>
        </div>

        <div className="flex justify-between font-semibold text-base mt-2">
          <span>Total</span>
          <span>Rs. {finalTotal}</span>
        </div>

        {/* Checkout */}
        <button
          onClick={handlePayment}
          className="mt-4 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Checkout
        </button>

      </div>

    </div>
  );
}
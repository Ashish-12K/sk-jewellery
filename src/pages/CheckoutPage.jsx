import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, total } = useCart();
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
    country: "India",
    pincode: "",
  });

  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const upiId = "ak0912090@okicici";
  const merchantName = "Riza Jewellery";

  const validateForm = () => {
    for (let key in form) {
      if (!form[key]) {
        alert("Please fill all details");
        return false;
      }
    }
    return true;
  };

  const payViaUPI = () => {
    if (!validateForm()) return;

    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      merchantName
    )}&am=${finalTotal}&cu=INR`;

    window.location.href = upiUrl;
  };

  const goToOrderSuccess = () => {
    if (!validateForm()) return;

    navigate("/order-success", {
      state: {
        cart,
        total: finalTotal,
        customer: form,
      },
    });
  };

  const inputStyle =
    "w-full border border-gray-200 focus:border-black outline-none p-3 rounded-lg text-sm placeholder:text-xs";

  return (
    <div className="bg-[#fafafa] min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <h1 className="text-2xl font-semibold mb-1">
          Checkout
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Enter your delivery details
        </p>

        {/* Form */}
        <div className="space-y-4">

          <input
            placeholder="Full Name"
            className={inputStyle}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Phone Number"
            className={inputStyle}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <input
            placeholder="House No / Flat No"
            className={inputStyle}
            onChange={(e) =>
              setForm({ ...form, house: e.target.value })
            }
          />

          <input
            placeholder="Street / Area"
            className={inputStyle}
            onChange={(e) =>
              setForm({ ...form, street: e.target.value })
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              placeholder="City"
              className={inputStyle}
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
            />

            <input
              placeholder="Pincode"
              className={inputStyle}
              onChange={(e) =>
                setForm({ ...form, pincode: e.target.value })
              }
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <select
              className={inputStyle}
              onChange={(e) =>
                setForm({ ...form, state: e.target.value })
              }
              defaultValue=""
            >
              <option value="" disabled>
                Select State
              </option>

              {states.map((state) => (
                <option
                  key={state}
                  value={state}
                >
                  {state}
                </option>
              ))}

            </select>

            <select
              className={inputStyle}
              value="India"
              disabled
            >
              <option>
                India
              </option>
            </select>

          </div>

        </div>

        {/* Summary */}
        <div className="mt-10 border-t border-gray-100 pt-6">

          <div className="space-y-3">

            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₹ {total}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery</span>
              <span>₹ {deliveryCharge}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold pt-2">
              <span>Total</span>
              <span>₹ {finalTotal}</span>
            </div>

          </div>

          {/* UPI Payment Button */}
          <button
            onClick={payViaUPI}
            className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition text-sm font-medium"
          >
            Pay via UPI
          </button>

          {/* Payment Completed Button */}
          <button
            onClick={goToOrderSuccess}
            className="mt-3 w-full border border-black text-black py-3 rounded-xl hover:bg-black hover:text-white transition text-sm font-medium"
          >
            Payment Completed
          </button>

          <p className="text-xs text-center text-gray-500 mt-3">
            After completing payment through PhonePe, Paytm, Google Pay or any UPI app,
            click "Payment Completed" to continue.
          </p>

        </div>

      </div>
    </div>
  );
}
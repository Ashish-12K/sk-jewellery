import React from "react";
import { useEffect } from "react";
import {
  FaShippingFast,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaClock,
} from "react-icons/fa";

const ShippingDelivery = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div className="min-h-screen bg-[#faf7f2] text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7a4b2f] mb-4">
            Shipping & Delivery Policy
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-8">
            At Riza Jewellery, we are committed to delivering your jewellery
            safely and efficiently. Please read our shipping and delivery
            policy carefully before placing an order.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Order Processing */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">

            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <FaBoxOpen className="text-[#7a4b2f]" size={24} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Order Processing
            </h2>

            <p className="text-gray-600 leading-8">
              All orders are processed after successful order confirmation.
              Orders are usually prepared and dispatched within 1-3 business
              days depending on product availability and order volume.
            </p>

          </div>

          {/* Delivery Time */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">

            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <FaClock className="text-[#7a4b2f]" size={24} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Delivery Timeline
            </h2>

            <p className="text-gray-600 leading-8">
              Once dispatched, orders are generally delivered within 7-10
              business days depending on your location and courier service
              availability. Delivery timelines may vary during festivals,
              holidays, or unforeseen circumstances.
            </p>

          </div>

          {/* Shipping Coverage */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">

            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <FaMapMarkedAlt className="text-[#7a4b2f]" size={24} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Shipping Coverage
            </h2>

            <p className="text-gray-600 leading-8">
              We currently ship across India. Shipping availability may vary
              for certain remote locations depending on courier partner
              serviceability.
            </p>

          </div>

          {/* Shipping Information */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">

            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <FaShippingFast className="text-[#7a4b2f]" size={24} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Shipping Information
            </h2>

            <p className="text-gray-600 leading-8">
              Customers are requested to provide accurate shipping details
              including address, phone number, and pin code during checkout.
              Riza Jewellery will not be responsible for delays or failed
              deliveries caused by incorrect information provided by the
              customer.
            </p>

          </div>

        </div>

        {/* Additional Note */}
        <div className="mt-14 bg-[#7a4b2f] text-white rounded-3xl p-8 text-center shadow-xl">

          <h3 className="text-2xl font-semibold mb-3">
            Important Note
          </h3>

          <p className="text-gray-200 leading-8 max-w-3xl mx-auto">
            Delivery timelines are estimated and may occasionally be affected
            by weather conditions, courier delays, public holidays, or other
            unforeseen situations. We appreciate your patience and understanding.
          </p>

        </div>

      </div>
    </div>
  );
};

export default ShippingDelivery;

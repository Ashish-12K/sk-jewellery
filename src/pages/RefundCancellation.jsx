import React from "react";
import { ShieldCheck, Ban, PackageCheck, AlertCircle } from "lucide-react";
import { useEffect } from "react";

const RefundCancellation = () => {

    useEffect(() =>{
        window.scrollTo(0,0)
    }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7a4b2f] mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At Rizajewellery, every piece is crafted and curated with care,
            precision, and attention to detail. Please read our refund and
            cancellation policy carefully before placing an order.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cancellation */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">
            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <Ban className="text-[#7a4b2f]" size={28} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Order Cancellation
            </h2>

            <p className="text-gray-600 leading-8">
              Once an order is placed successfully on Rizajewellery, it cannot
              be cancelled. As our jewellery pieces are carefully processed and
              prepared immediately after order confirmation, we are unable to
              accept cancellation requests.
            </p>
          </div>

          {/* Refund */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">
            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <ShieldCheck className="text-[#7a4b2f]" size={28} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Refund Policy
            </h2>

            <p className="text-gray-600 leading-8">
              We do not provide refunds once the order has been confirmed and
              processed. Customers are requested to review product details,
              sizing, and order information carefully before making a purchase.
            </p>
          </div>

          {/* Damaged Product */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">
            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <PackageCheck className="text-[#7a4b2f]" size={28} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Damaged or Incorrect Products
            </h2>

            <p className="text-gray-600 leading-8">
              In the rare event that you receive a damaged or incorrect product,
              please contact us within 24 hours of delivery along with clear
              unboxing photos or videos. Our team will review the issue and
              assist you accordingly.
            </p>
          </div>

          {/* Important Note */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#eadfd3]">
            <div className="w-14 h-14 rounded-full bg-[#f5ebe2] flex items-center justify-center mb-5">
              <AlertCircle className="text-[#7a4b2f]" size={28} />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-[#7a4b2f]">
              Important Information
            </h2>

            <p className="text-gray-600 leading-8">
              Rizajewellery reserves the right to update or modify this policy
              at any time without prior notice. By placing an order on our
              website, you agree to the terms mentioned in this policy.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-14 bg-[#7a4b2f] text-white rounded-3xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-semibold mb-3">
            Need Help?
          </h3>

          <p className="text-gray-200 leading-7 max-w-2xl mx-auto">
            If you have any questions regarding your order or our policies,
            please feel free to contact our support team. We are always happy to
            assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellation;
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to place an order?",
      answer:
        "Browse products, select your item, click on 'Add to Cart', proceed to checkout and then download the order details image and Send Via WhatsApp. You can also place an order directly via WhatsApp.",
    },
    {
      question: "When will I get my order?",
      answer: "Orders are delivered within 5-7 business days.",
    },
    {
      question: "Do you take custom orders?",
      answer:
        "Yes, we accept custom orders. You can contact us via WhatsApp to discuss your requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="px-6 py-16 bg-gray-50">

        {/* FAQ */}
        <h2 className="text-2xl font-semibold mb-8">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-b-gray-300 pb-3 cursor-pointer"
            >

              <div
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <p>{item.question}</p>

                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown size={14} />
                </span>

              </div>

              {openIndex === index && (
                <p className="text-sm text-gray-600 mt-2 leading-7">
                  {item.answer}
                </p>
              )}

            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h3 className="font-semibold tracking-wide">
              FOR NEW UPDATES
            </h3>

            <p className="text-sm text-gray-600 mt-1 leading-7">
              Get exclusive deals and early access to new products.
            </p>
          </div>

          <div className="flex items-center border rounded-full px-5 py-3 w-full md:w-[350px] bg-white shadow-sm">

            <input
              type="email"
              placeholder="Email address"
              className="flex-1 outline-none bg-transparent text-sm"
            />

            <button className="text-lg hover:translate-x-1 transition">
              →
            </button>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>© 2026 Riza Jewellery. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/terms-and-conditions"
              className="hover:text-black transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy-policy"
              className="hover:text-black transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/refund-cancellation-policy"
              className="hover:text-black transition"
            >
              Refund & Cancellation Policy
            </Link>

            <Link
              to="/shipping-delivery-policy"
              className="hover:text-black transition"
            >
              Shipping & Delivery Policy
            </Link>

          </div>

        </div>

      </section>

      {/* Developer Credit */}
<div className="bg-black py-4 sm:py-3 text-center">

  <a
    href="https://ashish-portfolio-bay.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 tracking-[3px] text-xs md:text-xs hover:text-white transition inline-block"
  >
    <span>
      Designed & Developed by{" "}
    </span>

    <span className="underline decoration-red-500 underline-offset-4">
      Ashish.
    </span>

  </a>

</div>
    </>
  );
}
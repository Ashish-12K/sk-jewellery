import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FooterSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you accept returns?",
      answer: "Yes, we accept returns within 7 days of delivery.",
    },
    {
      question: "How do I request a return or replacement?",
      answer: "You can contact us via WhatsApp or email to initiate a return.",
    },
    {
      question: "When will I get my order?",
      answer: "Orders are delivered within 5–7 business days.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16 bg-gray-50">

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mb-8">
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-b-gray-300 pb-3 cursor-pointer">

            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <p>{item.question}</p>
              <span><FaChevronDown size={14} /></span>
            </div>

            {openIndex === index && (
              <p className="text-sm text-gray-600 mt-2">
                {item.answer}
              </p>
            )}

          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="font-semibold">FOR NEW UPDATES</h3>
          <p className="text-sm text-gray-600 mt-1">
            Get exclusive deals and early access to new products.
          </p>
        </div>

        <div className="flex items-center border rounded-full px-4 py-2 w-full md:w-[350px]">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 outline-none bg-transparent"
          />
          <button>→</button>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="mt-12 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2026 SK Jewelry</p>
        <p className="cursor-pointer">Terms and Policies</p>
      </div>

    </section>
  );
}
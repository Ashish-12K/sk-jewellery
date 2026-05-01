import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const whatsappNumber = "919004188574";

  return (
    <div className="px-6 py-12 max-w-3xl mx-auto text-center">

      {/* Title */}
      <h1 className="text-3xl font-semibold mb-4">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-8">
        Have questions or want to place a custom order? Reach out to us anytime.
      </p>

      {/* Contact Info */}
      <div className="space-y-4 mb-8">

        <div>
          <h2 className="font-semibold">Phone</h2>
          <p className="text-gray-600">+91 90041 88574</p>
        </div>

        <div>
          <h2 className="font-semibold">Email</h2>
          <p className="text-gray-600">support@skjewelry.com</p>
        </div>

      </div>

      {/* WhatsApp Button */}
      <button
        onClick={() =>
          window.open(`https://wa.me/${whatsappNumber}`, "_blank")
        }
        className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition mx-auto"
      >
        <FaWhatsapp />
        Chat on WhatsApp
      </button>

    </div>
  );
}
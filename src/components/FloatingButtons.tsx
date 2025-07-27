// components/FloatingButtons.tsx
"use client";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+91XXXXXXXXXX" // Replace with your number
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-105"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}

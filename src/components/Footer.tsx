import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Maharaja Band</h2>
          <p className="text-sm">
            Bringing grandeur and music to life since 1985. We specialize in traditional Indian wedding processions and cultural events with royal elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-yellow-500">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe to get event updates & offers:</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 border border-gray-600 text-sm text-white"
            />
            <button className="bg-yellow-500 text-black py-2 rounded font-semibold hover:bg-yellow-600 transition">Subscribe</button>
          </form>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://instagram.com/maharajaband" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Maharaja Band. All rights reserved.
      </div>
    </footer>
  );
}

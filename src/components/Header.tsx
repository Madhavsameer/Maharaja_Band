"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Gallery", "Contact"];

  return (
    <header className="sticky top-0 left-0 w-full z-30 backdrop-blur-md bg-black/90 shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Animated Logo */}
        <Link href="/" className="flex items-center">
          <motion.img
            src="/images/logo.png"
            alt="Maharaja Band Logo"
            className="h-24 w-auto object-contain"
            initial={{ scale: 0, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 8, delay: 0.2 }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold text-white">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black px-6 pt-2 pb-4 space-y-3 text-white shadow-md"
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-yellow-400 transition"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}

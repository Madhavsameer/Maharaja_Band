"use client";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-[#1a0000] to-black flex flex-col items-center justify-center z-[9999]">
      {/* Glowing bouncing animated logo */}
      <motion.div
        className="h-36 w-36 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.4)] border-4 border-yellow-400"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/logo.png" // Should be transparent PNG
          alt="Maharaja Band"
          className="h-20 w-20 object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Animated Royal Text */}
      <motion.h2
        className="mt-6 text-yellow-400 text-xl md:text-2xl font-bold tracking-wide text-center font-serif"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Bringing Royalty to Your Wedding...
      </motion.h2>
    </div>
  );
}

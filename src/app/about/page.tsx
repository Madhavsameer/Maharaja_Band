"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import {
  FaUsers,
  FaRegCalendarCheck,
  FaAward,
} from "react-icons/fa";

// ✅ Counter component correctly typed and fixed
type CounterProps = {
  icon: ReactNode;
  title: string;
  value: number;
};

function Counter({ icon, title, value }: CounterProps) {
  return (
    <motion.div
      className="bg-gray-800 shadow-xl rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
      whileHover={{
        rotate: [0, 2, -2, 0],
        transition: { duration: 0.4 },
      }}
    >
      <div className="text-yellow-400 text-4xl mb-2">{icon}</div>
      <h3 className="text-3xl font-bold text-white">
        <CountUp end={value} duration={3} />+
      </h3>
      <p className="text-gray-400 mt-1">{title}</p>
    </motion.div>
  );
}

// ✅ Main page component
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us – Maharaja Band</title>
        <meta
          name="description"
          content="Maharaja Band has added royal musical energy to weddings since 1985. Discover our legacy, mission, and why thousands trust us."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Head>

      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Typewriter Heading */}
          <motion.h1
            className="text-5xl font-extrabold text-yellow-400 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              options={{
                strings: ["Who We Are", "We Are Maharaja Band"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg leading-8 max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="font-semibold text-yellow-400">Maharaja Band</span> has been the soul of weddings and events in Patna
            since 1985. With a blend of traditional flair and modern style, we craft musical magic for your big day — royal processions,
            LED musical entries, and unforgettable moments are our signature.
          </motion.p>

          {/* Counters */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Counter icon={<FaRegCalendarCheck />} title="Weddings Done" value={5000} />
            <Counter icon={<FaAward />} title="Years of Experience" value={38} />
            <Counter icon={<FaUsers />} title="Team Members" value={120} />
          </motion.div>

          {/* Legacy and Mission */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-yellow-500/30 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">Our Legacy</h3>
              <p className="leading-7 text-gray-300">
                With 35+ years of unmatched musical brilliance, we&apos;ve added life to thousands of weddings across Bihar and beyond.
                Our disciplined team and rich instruments have made us a trusted name in every household.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3, duration: 1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-yellow-500/30 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">Our Mission</h3>
              <p className="leading-7 text-gray-300">
                To merge Indian wedding traditions with a modern spark — leaving behind melodies and beats that stay in hearts forever.
                We aim to be more than just music; we aim to be memories.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Why Choose Maharaja Band?</h2>
            <ul className="grid md:grid-cols-2 gap-5 text-left text-gray-200 text-lg">
              <li>🎺 Energetic Brass &amp; Percussion Performance</li>
              <li>💃 LED Dhol &amp; Musical Baraat Entry</li>
              <li>🎷 Colorful Royal Uniforms</li>
              <li>🎼 Well-trained Team with Decades of Experience</li>
              <li>🎉 Discipline, Timing &amp; Customised Performances</li>
              <li>👑 Trusted by Generations Since 1985</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}

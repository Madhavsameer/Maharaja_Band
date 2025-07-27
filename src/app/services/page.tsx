"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Royal Wedding Processions",
    icon: "👑",
    short: "Majestic Baraat with full band.",
    detail:
      "Step into royalty with our traditional baraat band featuring grand dhols, trumpets, and elegantly uniformed artists.",
  },
  {
    title: "Shehnai + Dhol + Tasha Group",
    icon: "🎼",
    short: "Musical vibes from tradition.",
    detail:
      "Soulful Shehnai combined with energetic Dhol and Tasha beats for a rich, cultural celebration experience.",
  },
  {
    title: "Flower-decorated Horses & Carriages",
    icon: "🐎",
    short: "Regal groom entry.",
    detail:
      "Beautifully adorned horses and vintage-style carriages to create a royal and unforgettable wedding moment.",
  },
  {
    title: "LED DJ Band with Mobile Stage",
    icon: "💡",
    short: "Modern baraat party.",
    detail:
      "Light up your night with our LED DJ van, synced lights, dance crew, and mobile sound stages for next-level energy.",
  },
  {
    title: "Chariots & Fancy Lights",
    icon: "🚨",
    short: "Glorious illuminated show.",
    detail:
      "Make your event shine with artistic chariots and synchronized fancy lighting setups for night weddings.",
  },
  {
    title: "Live Folk Performers",
    icon: "🕺",
    short: "Traditional folk entertainment.",
    detail:
      "Enjoy authentic folk performances with live singers, dancers, and musicians to bring cultural roots to your event.",
  },
  {
    title: "Punjabi Dhol Crew",
    icon: "🥁",
    short: "High-energy dance beats.",
    detail:
      "Get the crowd grooving with our energetic Punjabi dhol players — perfect for baraats and entrances.",
  },
  {
    title: "Bride & Groom Special Entry",
    icon: "💑",
    short: "Customized royal entry.",
    detail:
      "Special entry setups for the bride and groom with coordinated music, lights, and performers tailored to the theme.",
  },
  {
    title: "Fireworks & Cold Pyro Effects",
    icon: "🎆",
    short: "Sparkling celebration moments.",
    detail:
      "Enhance key moments with safe fireworks and cold pyro effects for a sparkling and memorable celebration.",
  },
  {
    title: "Band Uniform Customization",
    icon: "🧥",
    short: "Themed uniforms for events.",
    detail:
      "Our team wears customized band uniforms aligned with your wedding theme for a more cohesive and royal look.",
  },
];


export default function ServicesPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-300 mb-16 tracking-widest uppercase">
          Maharaja Band – Our Services
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group perspective"
              whileHover={{ scale: 1.04 }}
              onClick={() => handleFlip(index)}
            >
              <div
                className={`relative transition-transform duration-700 transform-style-preserve-3d ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Card */}
                <div className="glass-card p-6 rounded-xl shadow-2xl backface-hidden h-64 flex flex-col justify-center items-center text-center cursor-pointer border border-yellow-400">
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-yellow-300">{service.title}</h3>
                  <p className="text-sm text-gray-200 mt-2">{service.short}</p>
                </div>

                {/* Back Card */}
                <div className="glass-card absolute top-0 left-0 w-full h-full p-6 rounded-xl shadow-2xl rotate-y-180 backface-hidden text-center">
                  <h3 className="text-lg font-bold text-yellow-200 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-100">{service.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
          position: relative;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}

'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/images/slide1.jpeg',
  '/images/slide2.jpeg',
  '/images/slide3.jpeg',
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-sans text-white bg-black">
      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh]">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Slide ${i}`}
            fill
            className={`absolute top-0 left-0 object-cover transition-opacity duration-1000 ${
              index === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-wide">
            Maharaja Band
          </h1>
          <p className="mt-4 text-xl md:text-2xl italic text-gray-300">
            Royalty in Every Beat — Dhol, Lights & Legacy
          </p>
          <p className="mt-4 max-w-2xl text-sm md:text-md text-gray-300">
            India’s most prestigious wedding & event band. From LED Dhols, DJ Vans to Elite Performers — we bring grandness, rhythm & unforgettable vibes to your celebrations.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <a
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full text-md font-semibold shadow-xl"
            >
              📞 Book Now
            </a>
            <a
              href="/gallery"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-md"
            >
              📸 View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full py-20 bg-[#0e0e0e] px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Maharaja Band?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            ['🎷 Premium Instruments', 'Top-tier sound for every function.'],
            ['🕺 LED Dhols & DJ Vans', 'Modern tech meets cultural rhythm.'],
            ['👑 Royal Uniformed Team', 'A visual treat to match the sound.'],
            ['📍 Pan India Service', 'Available across cities & towns.'],
            ['⭐ 5000+ Events', 'Experience that speaks excellence.'],
            ['💯 100% Client Satisfaction', 'Check our 5-star reviews!'],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-6 border border-gray-700 rounded-xl hover:bg-white/5 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full py-20 bg-gradient-to-b from-black via-[#111] to-black px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Royal Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: '/images/slide1.jpeg',
              title: 'Wedding Baraat',
              desc: 'Energetic baraat with LED dhols, musical band, fireworks & dancers.',
            },
            {
              img: '/images/slide2.jpeg',
              title: 'Corporate Events',
              desc: 'Professional band setup for corporate gatherings and celebrations.',
            },
            {
              img: '/images/slide3.jpeg',
              title: 'Stage Shows',
              desc: 'Live performances with lighting, choreography, and coordination.',
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-16 bg-yellow-400 text-black text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let’s Make Your Event Royal</h2>
        <p className="text-lg mb-6">Book Maharaja Band Today for a Grand Celebration!</p>
        <a
          href="/contact"
          className="bg-black text-white px-10 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          📞 Contact Now
        </a>
      </section>
    </main>
  );
}

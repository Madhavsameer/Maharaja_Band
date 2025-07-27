import Hero from "@/components/Hero";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <Hero />

      {/* About Section */}
      <section className="px-4 py-16 text-center bg-[#121212]">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">
          Since 1985, Royalty in Every Beat
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Maharaja Band brings heritage, rhythm, and grandeur to your special day. We specialize in making Indian weddings majestic with traditional instruments and unforgettable performances.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          More than 1000+ weddings celebrated with pride & passion
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1A1A1A] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-white mb-12">Why Choose Maharaja Band?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Grand Procession", icon: "🥁" },
              { title: "Traditional Dhol Beats", icon: "🪘" },
              { title: "Decorated Baggi & Lights", icon: "🚗" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[#262626] rounded-xl shadow-lg p-6 hover:scale-105 transition hover:shadow-yellow-500/20"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-yellow-400">{feature.title}</h4>
                <p className="text-gray-400 text-sm">
                  Experience the vibrant joy of Indian culture with every beat and step.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Experience Section */}
      <section className="py-20 bg-[#121212] px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Make Your Wedding a Royal Affair</h3>
            <p className="text-gray-300 mb-6">
              With Maharaja Band, every wedding becomes a regal event. From vibrant dhols to elegant dress codes, our team ensures a memorable experience filled with traditional charm and musical magic.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition"
            >
              Book Now
            </a>
          </div>
          <div>
            <Image
              src="/images/home1.jpeg"
              alt="Royal Wedding Celebration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1A1A1A] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-12 text-white">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Ravi Kumar",
                comment:
                  "Maharaja Band made our wedding unforgettable! The energy, beats, and vibes were top-notch.",
              },
              {
                name: "Anjali Sharma",
                comment:
                  "They brought so much color and joy to our celebration. Highly recommended!",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-[#262626] p-6 rounded-xl shadow-md text-left hover:shadow-yellow-500/20 transition"
              >
                <p className="text-gray-300 mb-4 italic">"{review.comment}"</p>
                <h4 className="text-md font-bold text-yellow-400">- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Function to extract file ID from Google Drive share link
function getDriveFileId(url) {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? match[1] : "";
}

export default function GalleryPage() {
  const media = [
    {
      type: "video",
      src: "https://drive.google.com/file/d/10SP7Mgasz8cl1EPqgag8WwbfAt-_MUcP/view?usp=drivesdk",
      title: "Royal Entry",
    },
    {
      type: "video",
      src: "https://drive.google.com/file/d/10QTlh5hSsrb9gxl9GCIkRVu2_JjZsRk8/view?usp=drivesdk",
      title: "Traditional Ceremony",
    },
    {
      type: "video",
      src: "https://drive.google.com/file/d/10Kr5rKRwJw-yb6WbpAHW8Z83iWanQ9hT/view?usp=drivesdk",
      title: "Grand Baraat Dance",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/movie.mp4",
      title: "Mehndi Night Performance",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1525295815900-70031f7f96aa?auto=format&fit=crop&w=800&q=80",
      title: "Reception Vibes",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">Gallery Highlights</h1>
        <p className="text-gray-300 text-lg mb-12">
          A glimpse of our magical wedding processions and musical moments.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {media.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="group overflow-hidden rounded-xl shadow-lg bg-gray-800 hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-500"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:opacity-90 transition duration-500"
                />
              ) : item.src.includes("drive.google.com") ? (
                <iframe
                  src={`https://drive.google.com/file/d/${getDriveFileId(item.src)}/preview`}
                  className="w-full h-64"
                  allow="autoplay"
                ></iframe>
              ) : (
                <video
                  className="w-full h-64 object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-yellow-300 group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

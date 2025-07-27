"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // replace
        "your_template_id", // replace
        form.current,
        "your_public_key"   // replace
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Want to book Maharaja Band for your special day? Fill out the form below.
          </p>
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
              className="p-3 bg-gray-700 border border-gray-600 rounded w-full text-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="p-3 bg-gray-700 border border-gray-600 rounded w-full text-white"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              className="p-3 bg-gray-700 border border-gray-600 rounded w-full text-white"
            />
            <input
              type="text"
              name="user_location"
              placeholder="Event Location"
              className="p-3 bg-gray-700 border border-gray-600 rounded w-full text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 bg-gray-700 border border-gray-600 rounded w-full h-32 text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-600 transition"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Maharaja Band Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57556.74351419856!2d85.1186742433762!3d25.602101653693553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58672800cbcb%3A0x9e2d8b5db7e9aa7f!2sRamkrishna%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1690976427827!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

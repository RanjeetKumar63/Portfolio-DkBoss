import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    emailjs.init({
      publicKey: "nwidU9P6XM3tBHs1f",
    });
    console.log(form.current.user_email.value);
    // Method 1: BEST SOLUTION - Using send() with explicit parameters
    emailjs
      .send(
        "service_q2zfbym", // Your Service ID
        "template_khs674b", // Your Template ID
        {
          to_email: "ry5198564@gmail.com", // REQUIRED - Hardcoded recipient
          user_name: form.current.user_name.value,
          email: form.current.user_email.value,
          user_email: form.current.user_email.value,
          user_message: form.current.message.value,
          reply_to: form.current.user_email.value,
        }
        // Your Public Key
      )
      .then(() => {
        setMessageSent(true);
        form.current.reset();
      })
      .catch((err) => {
        setError(
          "Failed to send. Please email me directly at ry5198564@gmail.com"
        );
        console.error("EmailJS Error:", err);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          Contact <span className="text-blue-400">Me</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            {messageSent && (
              <div className="bg-green-500/20 text-green-400 p-4 rounded mb-6">
                Message sent! I'll respond within 24 hours.
              </div>
            )}

            {error && (
              <div className="bg-red-500/20 text-red-400 p-4 rounded mb-6">
                {error}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FaPaperPlane />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400">+91 xxxxxxxxxx</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">ry5198564@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-400">Mirzapur, UP, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Cyber Safety Tips</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Never share passwords or OTPs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Verify links before clicking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Use strong, unique passwords
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

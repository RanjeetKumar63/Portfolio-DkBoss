// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   FaPaperPlane,
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Contact = () => {
//   const form = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [messageSent, setMessageSent] = useState(false);
//   const [error, setError] = useState(null);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);
//     emailjs.init({
//       publicKey: "nwidU9P6XM3tBHs1f",
//     });
//     console.log(form.current.user_email.value);
//     // Method 1: BEST SOLUTION - Using send() with explicit parameters
//     emailjs
//       .send(
//         "service_q2zfbym", // Your Service ID
//         "template_khs674b", // Your Template ID
//         {
//           to_email: "ry5198564@gmail.com", // REQUIRED - Hardcoded recipient
//           user_name: form.current.user_name.value,
//           email: form.current.user_email.value,
//           user_email: form.current.user_email.value,
//           user_message: form.current.message.value,
//           reply_to: form.current.user_email.value,
//         }
//         // Your Public Key
//       )
//       .then(() => {
//         setMessageSent(true);
//         form.current.reset();
//       })
//       .catch((err) => {
//         setError(
//           "Failed to send. Please email me directly at ry5198564@gmail.com"
//         );
//         console.error("EmailJS Error:", err);
//       })
//       .finally(() => setIsSubmitting(false));
//   };

//   return (
//     <div
//       id="contact"
//       className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
//           Contact <span className="text-blue-400">Me</span>
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

//             {messageSent && (
//               <div className="bg-green-500/20 text-green-400 p-4 rounded mb-6">
//                 Message sent! I'll respond within 24 hours.
//               </div>
//             )}

//             {error && (
//               <div className="bg-red-500/20 text-red-400 p-4 rounded mb-6">
//                 {error}
//               </div>
//             )}

//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-1"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="user_name"
//                   required
//                   className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-1"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="user_email"
//                   required
//                   className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-1"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   required
//                   className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
//               >
//                 <FaPaperPlane />
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <div className="text-blue-400 mt-1">
//                     <FaPhone />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Phone</h3>
//                     <p className="text-gray-400">+91 xxxxxxxxxx</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="text-blue-400 mt-1">
//                     <FaEnvelope />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Email</h3>
//                     <p className="text-gray-400">ry5198564@gmail.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="text-blue-400 mt-1">
//                     <FaMapMarkerAlt />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Location</h3>
//                     <p className="text-gray-400">Mirzapur, UP, India</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-bold mb-4">Cyber Safety Tips</h2>
//               <ul className="space-y-3 text-gray-300">
//                 <li className="flex items-start gap-2">
//                   <span className="text-blue-400">•</span>
//                   Never share passwords or OTPs
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-blue-400">•</span>
//                   Verify links before clicking
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-blue-400">•</span>
//                   Use strong, unique passwords
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaGlobe,
  FaBolt,
  FaRocket,
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
      )
      .then(() => {
        setMessageSent(true);
        form.current.reset();
        setTimeout(() => setMessageSent(false), 5000);
      })
      .catch((err) => {
        setError(
          "Failed to send. Please email me directly at ry5198564@gmail.com"
        );
        console.error("EmailJS Error:", err);
      })
      .finally(() => setIsSubmitting(false));
  };

  const cyberTips = [
    {
      icon: <FaLock className="text-xl" />,
      title: "Password Security",
      description: "Use strong, unique passwords for each account",
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Two-Factor Auth",
      description: "Enable 2FA for all important accounts",
    },
    {
      icon: <FaUserShield className="text-xl" />,
      title: "Social Media Safety",
      description: "Be cautious about sharing personal information",
    },
    {
      icon: <FaGlobe className="text-xl" />,
      title: "Safe Browsing",
      description: "Verify URLs and use HTTPS connections",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <FaBolt className="text-yellow-400 animate-pulse" />
            <span className="text-blue-300 font-semibold text-sm tracking-wide">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to enhance your cybersecurity? Let's discuss how I can help
            protect your digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:border-blue-500/50 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
                <FaPaperPlane className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold">Send Secure Message</h2>
            </div>

            {/* Status Messages */}
            {messageSent && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 p-4 rounded-xl mb-6 backdrop-blur-sm flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>
                  Message sent securely! I'll respond within 24 hours.
                </span>
              </div>
            )}

            {error && (
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-400 p-4 rounded-xl mb-6 backdrop-blur-sm flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span>{error}</span>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-4 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-4 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-4 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 resize-none"
                  placeholder="Describe your cybersecurity needs or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Securely...</span>
                  </>
                ) : (
                  <>
                    <FaRocket />
                    <span>Send Secure Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Cyber Tips */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:border-green-500/50 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl">
                  <FaUserShield className="text-xl text-white" />
                </div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FaPhone className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+91 xxxxxxxxxx</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                    <FaEnvelope className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">ry5198564@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group">
                  <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-red-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Mirzapur, UP, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyber Safety Tips */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:border-yellow-500/50 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-xl">
                  <FaShieldAlt className="text-xl text-white" />
                </div>
                <h2 className="text-2xl font-bold">Cyber Safety Tips</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cyberTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 group hover:transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">
                          {tip.title}
                        </h3>
                        <p className="text-gray-400 text-xs">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Info */}
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-blue-300 text-sm">
                    <span className="font-semibold">Quick Response:</span>{" "}
                    Typically within 2-4 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <FaLock className="text-green-400" />
                <span className="text-green-400 font-semibold text-sm">
                  SECURE CONNECTION
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                All communications are encrypted and secure
              </p>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">
              Available for cybersecurity consultations and awareness sessions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

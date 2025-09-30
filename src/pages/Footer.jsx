// import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (

//     <footer className="bg-gray-900 text-gray-300 py-10 px-6 sm:px-16 mt-0">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
//         {/* Left Side */}
//         <div>
//           <h2 className="text-2xl font-bold">
//             <span className="text-red-500">C</span>yber{" "}
//             <span className="text-yellow-200">R</span>anjeet{" "}
//             <span className="text-blue-400">Y</span>adav
//           </h2>
//           <p className="text-sm mt-2">
//             CyberSecurity Researcher and Cyber Volunteer in Lalganj Mirzapur 🚀
//           </p>
//         </div>

//         {/* Middle Navigation */}
//         <div className="flex gap-6 text-sm">
//           <a href="#home" className="hover:text-blue-400">
//             Home
//           </a>
//           <a href="#skills" className="hover:text-blue-400">
//             Skills
//           </a>
//           <a href="#projects" className="hover:text-blue-400">
//             Projects
//           </a>
//           <a href="#session" className="hover:text-blue-400">
//             Session
//           </a>
//           <a href="#contact" className="hover:text-blue-400">
//             Contact
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-6 text-xl">
//           <a
//             href="https://github.com/RanjeetKumar63"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-github hover:text-blue-400"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/ranjeet-yadav-356854255/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-linkedin hover:text-blue-400"></i>
//           </a>
//           <a
//             href="https://twitter.com/ranjeetyadav"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-twitter hover:text-blue-400"></i>
//           </a>
//           <a
//             href="https://instagram.com/tech_cyber_3616"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-instagram hover:text-blue-400"></i>
//           </a>
//           <a
//             href="mailto:ry5198564@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fas fa-envelope hover:text-blue-400"></i>
//           </a>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
//         © 2025 <span className="font-semibold">Cyber Ranjeet Yadav.</span> All
//         rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,
//   FaEnvelope,
//   FaShieldAlt,
//   FaHeart,
//   FaBolt,
//   FaRocket,
// } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       icon: <FaGithub className="text-xl" />,
//       href: "https://github.com/RanjeetKumar63",
//       label: "GitHub",
//       color: "hover:text-purple-400",
//     },
//     {
//       icon: <FaLinkedin className="text-xl" />,
//       href: "https://www.linkedin.com/in/ranjeet-yadav-356854255/",
//       label: "LinkedIn",
//       color: "hover:text-blue-400",
//     },
//     {
//       icon: <FaTwitter className="text-xl" />,
//       href: "https://twitter.com/ranjeetyadav",
//       label: "Twitter",
//       color: "hover:text-cyan-400",
//     },
//     {
//       icon: <FaInstagram className="text-xl" />,
//       href: "https://instagram.com/tech_cyber_3616",
//       label: "Instagram",
//       color: "hover:text-pink-400",
//     },
//     {
//       icon: <FaEnvelope className="text-xl" />,
//       href: "mailto:ry5198564@gmail.com",
//       label: "Email",
//       color: "hover:text-red-400",
//     },
//   ];

//   const quickLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Session", href: "#session" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-gray-700/50">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
//                 <FaShieldAlt className="text-white text-lg" />
//               </div>
//               <h2 className="text-2xl font-bold">
//                 <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
//                   CyberRanjeet
//                 </span>
//               </h2>
//             </div>
//             <p className="text-gray-400 leading-relaxed">
//               Cybersecurity Researcher & Cyber Volunteer dedicated to making
//               digital spaces safer through awareness and education.
//             </p>
//             <div className="flex items-center space-x-2 text-sm text-gray-500">
//               <FaBolt className="text-yellow-400 animate-pulse" />
//               <span>Securing Digital India</span>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
//               <FaRocket className="text-blue-400" />
//               <span>Quick Links</span>
//             </h3>
//             <div className="grid grid-cols-2 gap-2">
//               {quickLinks.map((link, index) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 flex items-center space-x-2 group"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <span>{link.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Social Links & Contact */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-white">
//               Connect With Me
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Let's collaborate to create a safer digital world.
//             </p>

//             {/* Social Icons */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/30 group`}
//                   aria-label={social.label}
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-2 text-sm">
//               <div className="flex items-center space-x-2 text-gray-400">
//                 <FaEnvelope className="text-red-400" />
//                 <span>ry5198564@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-400">
//                 <FaShieldAlt className="text-green-400" />
//                 <span>Cyber Volunteer - Lalganj, Mirzapur</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Security Badge */}
//         <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20 rounded-2xl p-4 mb-6 backdrop-blur-sm">
//           <div className="flex items-center justify-center space-x-3">
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-green-400 text-sm font-semibold">
//                 SECURE CONNECTION
//               </span>
//             </div>
//             <span className="text-gray-400 text-sm">•</span>
//             <span className="text-gray-400 text-sm">
//               Encrypted Communication
//             </span>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700/50 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             {/* Copyright */}
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <span>© {currentYear}</span>
//               <span className="font-semibold text-white">
//                 CyberRanjeet Yadav
//               </span>
//               <span>•</span>
//               <span>All rights reserved</span>
//             </div>

//             {/* Made with love */}
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <span>Made with</span>
//               <FaHeart className="text-red-400 animate-pulse" />
//               <span>for a safer digital India</span>
//             </div>

//             {/* Privacy Notice */}
//             <div className="text-xs text-gray-500">
//               <span>🔒 Your privacy is protected</span>
//             </div>
//           </div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/10 rounded-full animate-bounce"></div>
//         <div className="absolute -top-4 -right-4 w-6 h-6 bg-cyan-500/10 rounded-full animate-bounce delay-300"></div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,
//   FaEnvelope,
//   FaShieldAlt,
//   FaHeart,
//   FaBolt,
//   FaRocket,
// } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       icon: <FaGithub className="text-xl" />,
//       href: "https://github.com/RanjeetKumar63",
//       label: "GitHub",
//       color: "hover:text-purple-400",
//     },
//     {
//       icon: <FaLinkedin className="text-xl" />,
//       href: "https://www.linkedin.com/in/ranjeet-yadav-356854255/",
//       label: "LinkedIn",
//       color: "hover:text-blue-400",
//     },
//     {
//       icon: <FaTwitter className="text-xl" />,
//       href: "https://twitter.com/ranjeetyadav",
//       label: "Twitter",
//       color: "hover:text-cyan-400",
//     },
//     {
//       icon: <FaInstagram className="text-xl" />,
//       href: "https://instagram.com/tech_cyber_3616",
//       label: "Instagram",
//       color: "hover:text-pink-400",
//     },
//     {
//       icon: <FaEnvelope className="text-xl" />,
//       href: "mailto:ry5198564@gmail.com",
//       label: "Email",
//       color: "hover:text-red-400",
//     },
//   ];

//   const quickLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Session", href: "#session" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-gray-600">
//       {/* Background with better contrast */}
//       <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm"></div>

//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
//                 <FaShieldAlt className="text-white text-lg" />
//               </div>
//               <h2 className="text-2xl font-bold text-white">
//                 Cyber<span className="text-blue-400">Ranjeet</span>
//               </h2>
//             </div>
//             <p className="text-gray-300 leading-relaxed text-sm">
//               Cybersecurity Researcher & Cyber Volunteer dedicated to making
//               digital spaces safer through awareness and education.
//             </p>
//             <div className="flex items-center space-x-2 text-sm text-blue-400">
//               <FaBolt className="text-yellow-400" />
//               <span className="font-medium">Securing Digital India</span>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
//               <FaRocket className="text-blue-400" />
//               <span>Quick Links</span>
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {quickLinks.map((link, index) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-1 flex items-center space-x-2 group text-sm"
//                 >
//                   <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <span className="font-medium">{link.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Social Links & Contact */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-white">
//               Connect With Me
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Let's collaborate to create a safer digital world.
//             </p>

//             {/* Social Icons */}
//             <div className="flex space-x-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 ${social.color} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 group`}
//                   aria-label={social.label}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-2 text-sm">
//               <div className="flex items-center space-x-2 text-gray-300">
//                 <FaEnvelope className="text-red-400" />
//                 <span className="font-medium">ry5198564@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-300">
//                 <FaShieldAlt className="text-green-400" />
//                 <span>Cyber Volunteer - Lalganj, Mirzapur</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Security Badge */}
//         <div className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400 rounded-xl p-4 mb-6">
//           <div className="flex items-center justify-center space-x-3">
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-green-400 text-sm font-semibold">
//                 SECURE CONNECTION
//               </span>
//             </div>
//             <span className="text-gray-400 text-sm">•</span>
//             <span className="text-gray-300 text-sm">
//               Encrypted Communication
//             </span>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             {/* Copyright */}
//             <div className="flex items-center space-x-2 text-sm text-gray-300">
//               <span>© {currentYear}</span>
//               <span className="font-semibold text-white">
//                 CyberRanjeet Yadav
//               </span>
//               <span>•</span>
//               <span>All rights reserved</span>
//             </div>

//             {/* Made with love */}
//             <div className="flex items-center space-x-2 text-sm text-gray-300">
//               <span>Made with</span>
//               <FaHeart className="text-red-400" />
//               <span>for a safer digital India</span>
//             </div>

//             {/* Privacy Notice */}
//             <div className="text-xs text-gray-400">
//               <span>🔒 Your privacy is protected</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaShieldAlt,
  FaHeart,
  FaBolt,
  FaRocket,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/RanjeetKumar63",
      label: "GitHub",
      color: "hover:text-purple-400",
      animation: "animate-bounce",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/ranjeet-yadav-356854255/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      animation: "animate-pulse",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "https://twitter.com/ranjeetyadav",
      label: "Twitter",
      color: "hover:text-cyan-400",
      animation: "animate-bounce",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "https://instagram.com/tech_cyber_3616",
      label: "Instagram",
      color: "hover:text-pink-400",
      animation: "animate-pulse",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:ry5198564@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
      animation: "animate-bounce",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home", animation: "animate-fadeIn" },
    { name: "Skills", href: "#skills", animation: "animate-fadeIn" },
    { name: "Projects", href: "#projects", animation: "animate-fadeIn" },
    { name: "Session", href: "#session", animation: "animate-fadeIn" },
    { name: "Contact", href: "#contact", animation: "animate-fadeIn" },
  ];

  return (
    <footer
      // className="bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-gray-600"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20 pb-16 px-4 sm:px-6 lg:pt-24 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float1"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-float2"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float3"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-float4"></div>

        {/* Pulsing Orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>

        {/* Grid Pattern with Animation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-slideInLeft">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg animate-spin-slow">
                <FaShieldAlt className="text-white text-lg" />
              </div>
              <h2 className="text-2xl font-bold text-white animate-typewriter">
                Cyber<span className="text-blue-400">Ranjeet</span>
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm animate-fadeInUp">
              Cybersecurity Researcher & Cyber Volunteer dedicated to making
              digital spaces safer through awareness and education.
            </p>
            <div className="flex items-center space-x-2 text-sm text-blue-400 animate-pulse">
              <FaBolt className="text-yellow-400 animate-bounce" />
              <span className="font-medium">Securing Digital India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slideInUp">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <FaRocket className="text-blue-400 animate-launch" />
              <span>Quick Links</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-500 transform hover:translate-x-2 flex items-center space-x-2 group text-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping-once"></div>
                  <span className="font-medium group-hover:scale-105 transition-transform duration-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4 animate-slideInRight">
            <h3 className="text-lg font-semibold text-white">
              Connect With Me
            </h3>
            <p className="text-gray-300 text-sm animate-fadeInUp">
              Let's collaborate to create a safer digital world.
            </p>

            {/* Social Icons with Individual Animations */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-300 ${social.color} ${social.animation} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 group animate-socialIn`}
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info with Animations */}
            <div className="space-y-2 text-sm">
              <div
                className="flex items-center space-x-2 text-gray-300 animate-fadeInUp"
                style={{ animationDelay: "600ms" }}
              >
                <FaEnvelope className="text-red-400 animate-wiggle" />
                <span className="font-medium">
                  cyberdeepakrajput97@gmail.com
                </span>
              </div>
              <div
                className="flex items-center space-x-2 text-gray-300 animate-fadeInUp"
                style={{ animationDelay: "800ms" }}
              >
                <FaShieldAlt className="text-green-400 animate-pulse" />
                <span>Cyber Volunteer - Agra in UP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Badge with Glow Animation */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400 rounded-xl p-4 mb-6 backdrop-blur-sm animate-glow">
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-green-400 text-sm font-semibold animate-pulse">
                SECURE CONNECTION
              </span>
            </div>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-300 text-sm">
              Encrypted Communication
            </span>
          </div>
        </div>

        {/* Bottom Bar with Slide Up Animation */}
        <div className="border-t border-gray-700 pt-6 animate-slideInBottom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>© {currentYear}</span>
              <span className="font-semibold text-white animate-pulse">
                CyberDeepakRajput
              </span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>

            {/* Made with love - Heart Beat Animation */}
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Made with</span>
              <FaHeart className="text-red-400 animate-heartbeat" />
              <span>for a safer digital India</span>
            </div>

            {/* Privacy Notice */}
            <div className="text-xs text-gray-400 animate-fadeIn">
              <span>🔒 Your privacy is protected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(-10px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(-15px);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(10px) translateX(15px);
          }
        }
        @keyframes gridMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-40px) translateY(-40px);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideInBottom {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes socialIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }
        @keyframes launch {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }
        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        @keyframes ping-once {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(2);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float1 {
          animation: float1 6s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 8s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 7s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 9s ease-in-out infinite;
        }
        .animate-grid-move {
          animation: gridMove 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }
        .animate-typewriter {
          animation: typewriter 2s steps(20) 1s both;
          overflow: hidden;
          white-space: nowrap;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
        .animate-slideInUp {
          animation: slideInUp 1s ease-out;
        }
        .animate-slideInBottom {
          animation: slideInBottom 1s ease-out 0.5s both;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animate-socialIn {
          animation: socialIn 0.6s ease-out both;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-launch {
          animation: launch 2s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .animate-ping-once {
          animation: ping-once 0.6s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

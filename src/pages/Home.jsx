// import React from "react";
// import DKBOSS from "../assets/DkBoss.jpg";

// const Home = () => {
//   return (
//     <main
//       id="home"
//       className=" min-h-screen bg-gray-900 text-white pt-16 pb-16 px-4 sm:px-6 lg:pt-20 "
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
//           {/* Left Content */}
//           <div className="w-full lg:w-1/2 order-2 lg:order-1">
//             <p className="text-red-200 font-extralight mb-3 text-xl sm:text-2xl">
//               Welcome to my Portfolio
//             </p>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
//               Hye, I'm <span className="text-blue-400">Deepak Rajput</span>
//             </h1>

//             <div className="mb-4 sm:mb-6">
//               <span className="text-gray-200 font-semibold text-lg sm:text-xl">
//                 CyberSecurity Researcher & Network Engineer
//               </span>
//             </div>

//             <div className="text-gray-300 mb-6 sm:mb-8 leading-relaxed">
//               <span className="text-blue-100 font-medium">
//                 OSINT & Digital Forensics Specialist
//               </span>{" "}
//               | Cyber Volunteer at Agra (UP). With expertise in{" "}
//               <span className="text-blue-100">Ethical hacking</span> and{" "}
//               <span className="text-blue-100">Network Security</span>, I help
//               organizations strengthen their digital defenses against modern
//               threats.
//               <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
//                 {[
//                   {
//                     name: "Autopsy",
//                     icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
//                   },
//                   {
//                     name: "EXIFTool",
//                     icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
//                   },
//                   {
//                     name: "Maltego",
//                     icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
//                   },
//                   {
//                     name: "Wireshark",
//                     icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
//                   },
//                 ].map((tool) => (
//                   <span
//                     key={tool.name}
//                     className="bg-gray-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm flex items-center"
//                   >
//                     <svg
//                       className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d={tool.icon}
//                       />
//                     </svg>
//                     {tool.name}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3 sm:gap-4">
//               {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
//                 Let's Connect
//               </button>
//               <button className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
//                 My Projects
//               </button> */}
//               <div className="flex flex-wrap gap-3 sm:gap-4">
//                 {/* Connect Button */}
//                 <a href="#contact">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
//                     Let's Connect
//                   </button>
//                 </a>

//                 {/* Projects Button */}
//                 <a href="#projects">
//                   <button className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
//                     My Projects
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
//             <img
//               src={DKBOSS}
//               alt="Ranjeet Yadav"
//               className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full shadow-2xl border-2 border-blue-500 transform hover:scale-105 transition duration-500"
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaUserShield,
  FaGlobe,
  FaRocket,
  FaTools,
} from "react-icons/fa";
import DKBOSS from "../assets/DkBoss.jpg";

const Home = () => {
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "CyberSecurity Researcher & Network Engineer";

  // Typewriter effect for the title
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const tools = [
    {
      name: "Autopsy",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      description: "Digital Forensics",
    },
    {
      name: "EXIFTool",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      description: "Metadata Analysis",
    },
    {
      name: "Maltego",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      description: "OSINT Intelligence",
    },
    {
      name: "Wireshark",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      description: "Network Analysis",
    },
  ];

  const stats = [
    { icon: <FaShieldAlt />, value: "50+", label: "Projects Secured" },
    { icon: <FaUserShield />, value: "100%", label: "Client Safety" },
    { icon: <FaGlobe />, value: "24/7", label: "Cyber Protection" },
    { icon: <FaRocket />, value: "99.9%", label: "Success Rate" },
  ];

  return (
    <main
      id="home"
      // className="min-h-screen bg-gradient-to-br from-black-900 via-black-900/20 to-gray-900 text-white pt-20 pb-16 px-4 sm:px-6 lg:pt-24 overflow-hidden relative"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20 pb-16 px-4 sm:px-6 lg:pt-24 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Welcome Text */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-blue-300 font-light text-sm sm:text-base tracking-wide">
                Welcome to my Cyber Portfolio
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                Deepak Rajput
              </span>
            </h1>

            {/* Animated Title */}
            <div className="mb-6 sm:mb-8">
              <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-red-600 to-gray-400 bg-clip-text text-transparent">
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <div className="text-white-400 mb-8 sm:mb-10 leading-relaxed text-lg">
              <span className="font-semibold bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent">
                OSINT & Digital Forensics Specialist
              </span>{" "}
              | Cyber Volunteer at Agra (UP). With expertise in{" "}
              <span className="text-blue-700 font-medium">Ethical hacking</span>{" "}
              and{" "}
              <span className="text-cyan-700 font-medium">
                Network Security
              </span>
              , I help organizations strengthen their digital defenses against
              modern threats.
            </div>

            {/* Tools & Technologies */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center ">
                <FaTools className="mr-2 text-blue-700" />
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={tool.icon}
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {tool.name}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="text-blue-400 text-lg mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2">
                  <FaUserShield />
                  <span>Let's Connect</span>
                </button>
              </a>

              <a href="#projects">
                <button className="border border-blue-400/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2">
                  <FaRocket />
                  <span>My Projects</span>
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src={DKBOSS}
                  alt="Deepak Rajput"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl shadow-2xl border-4 border-blue-500/30 transform hover:scale-105 transition-all duration-500"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/30"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-400/30 delay-300"></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/30"></div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-xl opacity-20 transform scale-110 -z-10 animate-pulse"></div>

              {/* Border Animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-border -z-10 animate-spin-slow">
                <div className="w-full h-full rounded-2xl bg-gray-900 m-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;

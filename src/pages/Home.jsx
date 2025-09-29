import React from "react";
import DKBOSS from "../assets/DkBoss.jpg";

const Home = () => {
  return (
    <main
      id="home"
      className=" min-h-screen bg-gray-900 text-white pt-16 pb-16 px-4 sm:px-6 lg:pt-20 "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-red-200 font-extralight mb-3 text-xl sm:text-2xl">
              Welcome to my Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Hye, I'm <span className="text-blue-400">Deepak Rajput</span>
            </h1>

            <div className="mb-4 sm:mb-6">
              <span className="text-gray-200 font-semibold text-lg sm:text-xl">
                CyberSecurity Researcher & Network Engineer
              </span>
            </div>

            <div className="text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              <span className="text-blue-100 font-medium">
                OSINT & Digital Forensics Specialist
              </span>{" "}
              | Cyber Volunteer at Agra (UP). With expertise in{" "}
              <span className="text-blue-100">Ethical hacking</span> and{" "}
              <span className="text-blue-100">Network Security</span>, I help
              organizations strengthen their digital defenses against modern
              threats.
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                {[
                  {
                    name: "Autopsy",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  },
                  {
                    name: "EXIFTool",
                    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                  },
                  {
                    name: "Maltego",
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  },
                  {
                    name: "Wireshark",
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  },
                ].map((tool) => (
                  <span
                    key={tool.name}
                    className="bg-gray-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm flex items-center"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-400"
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
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
                Let's Connect
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
                My Projects
              </button> */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {/* Connect Button */}
                <a href="#contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
                    Let's Connect
                  </button>
                </a>

                {/* Projects Button */}
                <a href="#projects">
                  <button className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-6 py-2 sm:px-8 sm:py-3 rounded-md transition font-medium text-sm sm:text-base">
                    My Projects
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <img
              src={DKBOSS}
              alt="Ranjeet Yadav"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full shadow-2xl border-2 border-blue-500 transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

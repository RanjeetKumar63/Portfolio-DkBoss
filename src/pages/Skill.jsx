import React from "react";

const About = () => {
  return (
    <div id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ethical Hacking */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Ethical Hacking</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Burp Suite</span>
              <span className="skill-badge">Metasploit</span>
              <span className="skill-badge">Nmap</span>
              <span className="skill-badge">OWASP ZAP</span>
              <span className="skill-badge">Kali Linux</span>
            </div>
          </div>

          {/* OSINT */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">OSINT</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Maltego</span>
              <span className="skill-badge">SpiderFoot</span>
              <span className="skill-badge">theHarvester</span>
              <span className="skill-badge">Recon-ng</span>
              <span className="skill-badge">Sherlock</span>
            </div>
          </div>

          {/* Forensics */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Forensics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Autopsy</span>
              <span className="skill-badge">FTK Imager</span>
              <span className="skill-badge">Wireshark</span>
              <span className="skill-badge">Volatility</span>
              <span className="skill-badge">EXIFTool</span>
            </div>
          </div>

          {/* MERN Stack */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">MERN Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">TailwindCSS</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Express.js</span>
              <span className="skill-badge">Node.js</span>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">C/C++</span>
              <span className="skill-badge">Bash</span>
              <span className="skill-badge">SQL</span>
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Other Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Docker</span>
              <span className="skill-badge">Git</span>
              <span className="skill-badge">AWS</span>
              <span className="skill-badge">CI/CD</span>
              <span className="skill-badge">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

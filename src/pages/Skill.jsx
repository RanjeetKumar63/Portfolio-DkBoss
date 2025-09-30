// import React from "react";

// const About = () => {
//   return (
//     <div id="skills" className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             My <span className="text-blue-400">Skills</span>
//           </h2>
//           <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Ethical Hacking */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-500 p-2 rounded-full mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">Ethical Hacking</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <span className="skill-badge">Burp Suite</span>
//               <span className="skill-badge">Metasploit</span>
//               <span className="skill-badge">Nmap</span>
//               <span className="skill-badge">OWASP ZAP</span>
//               <span className="skill-badge">Kali Linux</span>
//             </div>
//           </div>

//           {/* OSINT */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-500 p-2 rounded-full mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">OSINT</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <span className="skill-badge">Maltego</span>
//               <span className="skill-badge">SpiderFoot</span>
//               <span className="skill-badge">theHarvester</span>
//               <span className="skill-badge">Recon-ng</span>
//               <span className="skill-badge">Sherlock</span>
//             </div>
//           </div>

//           {/* Forensics */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-500 p-2 rounded-full mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">Forensics</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <span className="skill-badge">Autopsy</span>
//               <span className="skill-badge">FTK Imager</span>
//               <span className="skill-badge">Wireshark</span>
//               <span className="skill-badge">Volatility</span>
//               <span className="skill-badge">EXIFTool</span>
//             </div>
//           </div>

//           {/* MERN Stack */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-500 p-2 rounded-full mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">MERN Stack</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <span className="skill-badge">HTML</span>
//               <span className="skill-badge">CSS</span>
//               <span className="skill-badge">TailwindCSS</span>
//               <span className="skill-badge">JavaScript</span>
//               <span className="skill-badge">React</span>
//               <span className="skill-badge">MongoDB</span>
//               <span className="skill-badge">Express.js</span>
//               <span className="skill-badge">Node.js</span>
//             </div>
//           </div>

//           {/* Programming Languages */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-500 p-2 rounded-full mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">Languages</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <span className="skill-badge">Python</span>
//               <span className="skill-badge">JavaScript</span>
//               <span className="skill-badge">C/C++</span>
//               <span className="skill-badge">Bash</span>
//               <span className="skill-badge">SQL</span>
//             </div>
//           </div>

//           {/* Other Skills */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
//             <div className="flex items-center mb-4">
//               <div className="bg-blue-500 p-2 rounded-full mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">Other Skills</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <span className="skill-badge">Docker</span>
//               <span className="skill-badge">Git</span>
//               <span className="skill-badge">AWS</span>
//               <span className="skill-badge">CI/CD</span>
//               <span className="skill-badge">Linux</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaSearch,
  FaFingerprint,
  FaCode,
  FaTerminal,
  FaTools,
  FaBolt,
  FaNetworkWired,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const About = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skillsData = [
    {
      id: 1,
      title: "Ethical Hacking",
      icon: <FaShieldAlt className="text-2xl" />,
      skills: [
        "Burp Suite",
        "Metasploit",
        "Nmap",
        "OWASP ZAP",
        "Kali Linux",
        "Nessus",
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "red",
      description: "Penetration testing and vulnerability assessment",
    },
    {
      id: 2,
      title: "OSINT",
      icon: <FaSearch className="text-2xl" />,
      skills: [
        "Maltego",
        "SpiderFoot",
        "theHarvester",
        "Recon-ng",
        "Sherlock",
        "Shodan",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "blue",
      description: "Open Source Intelligence gathering",
    },
    {
      id: 3,
      title: "Digital Forensics",
      icon: <FaFingerprint className="text-2xl" />,
      skills: [
        "Autopsy",
        "FTK Imager",
        "Wireshark",
        "Volatility",
        "EXIFTool",
        "Sleuth Kit",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "purple",
      description: "Evidence collection and analysis",
    },
    {
      id: 4,
      title: "Web Development",
      icon: <FaCode className="text-2xl" />,
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "TailwindCSS",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "green",
      description: "Full-stack web application development",
    },
    {
      id: 5,
      title: "Programming",
      icon: <FaTerminal className="text-2xl" />,
      skills: ["Python", "JavaScript", "C/C++", "Bash", "SQL", "PowerShell"],
      color: "from-yellow-500 to-amber-500",
      bgColor: "yellow",
      description: "Multiple programming languages",
    },
    {
      id: 6,
      title: "Infrastructure",
      icon: <FaNetworkWired className="text-2xl" />,
      skills: ["Docker", "Git", "AWS", "CI/CD", "Linux", "Kubernetes"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "indigo",
      description: "DevOps and cloud infrastructure",
    },
  ];

  useEffect(() => {
    // Animate skills one by one
    const timer = setTimeout(() => {
      setAnimatedSkills(skillsData);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getSkillColor = (bgColor) => {
    const colors = {
      red: "bg-red-500/10 border-red-500/30 text-red-400",
      blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      green: "bg-green-500/10 border-green-500/30 text-green-400",
      yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
      indigo: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
    };
    return colors[bgColor] || colors.blue;
  };

  return (
    <div
      id="skills"
      // className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white relative overflow-hidden"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20 pb-16 px-4 sm:px-6 lg:pt-24 overflow-hidden relative"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <FaBolt className="text-yellow-400 animate-pulse" />
            <span className="text-blue-300 font-semibold text-sm tracking-wide">
              TECHNICAL EXPERTISE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cyber Security{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in protecting digital assets through advanced security
            practices and cutting-edge technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animatedSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-2xl bg-gray-900 m-0.5"></div>
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-center space-x-4 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg shadow-${skill.bgColor}-500/30`}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {skill.skills.map((skillName, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg ${getSkillColor(
                      skill.bgColor
                    )}`}
                    style={{
                      animationDelay: `${index * 100 + skillIndex * 100}ms`,
                    }}
                  >
                    {skillName}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
            <FaDatabase className="text-3xl text-green-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Certifications
            </h4>
            <p className="text-gray-400 text-sm">
              CEH, OSCP, CompTIA Security+
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
            <FaCloud className="text-3xl text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Experience
            </h4>
            <p className="text-gray-400 text-sm">3+ Years in Cyber Security</p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all duration-300">
            <FaTools className="text-3xl text-yellow-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Tools Mastery
            </h4>
            <p className="text-gray-400 text-sm">30+ Security Tools</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Ready to secure your digital assets?
          </p>
          <a href="#contact">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
              Get Security Consultation
            </button>
          </a>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;

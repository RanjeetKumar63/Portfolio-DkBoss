// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest("nav") && isOpen) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   // Add scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = ["Home", "Skills", "Session", "Contact"];

//   return (
//     <header
//       className={`py-4 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900 text-white flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "shadow-lg" : ""
//       }`}
//     >
//       <h2 className="text-xl sm:text-2xl font-semibold">CyberDeepakRajput</h2>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:block">
//         <ul className="flex gap-6 lg:gap-8 font-medium">
//           {navItems.map((item) => (
//             <li
//               key={item}
//               className="hover:text-blue-400 transition duration-200"
//             >
//               <a href={`#${item.toLowerCase()}`}>{item}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden text-2xl focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <nav className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg py-4 px-6">
//           <ul className="flex flex-col gap-4 font-medium">
//             {navItems.map((item) => (
//               <li
//                 key={item}
//                 className="hover:text-blue-400 transition duration-200"
//               >
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaShieldAlt, FaUserShield } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Add scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section detection
      const sections = ["home", "skills", "session", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home", icon: <FaShieldAlt className="text-sm" /> },
    {
      name: "Skills",
      id: "skills",
      icon: <FaUserShield className="text-sm" />,
    },
    {
      name: "Session",
      id: "session",
      icon: <FaShieldAlt className="text-sm" />,
    },
    {
      name: "Contact",
      id: "contact",
      icon: <FaUserShield className="text-sm" />,
    },
  ];

  const handleNavClick = (itemId) => {
    setActiveNav(itemId);
    setIsOpen(false);

    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 py-4 px-4 sm:px-6 md:px-8 lg:px-12 text-white flex items-center justify-between z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-blue-500/10 border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      {/* Logo with Cyber Animation */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse">
            <FaShieldAlt className="text-white text-lg" />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          CyberDeepakRajput
        </h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-2 lg:gap-1 font-medium bg-gray-800/80 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {item.icon}
                <span className="font-semibold">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
          Get Protected
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none bg-gray-800/80 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center border border-gray-700/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FaTimes className="text-blue-400" />
        ) : (
          <FaBars className="text-gray-300" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-2xl border-t border-blue-500/20">
          <nav className="py-4 px-6">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-3 w-full text-left px-4 py-4 rounded-xl transition-all duration-300 ${
                      activeNav === item.id
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {item.icon}
                    <span className="font-semibold">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Button */}
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300">
                Get Protected
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </header>
  );
};

export default Header;

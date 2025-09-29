// import { Link } from "react-router-dom";
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

//   return (
//     <header
//       className={`py-4 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900 text-white flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "shadow-lg" : ""
//       }`}
//     >
//       <h2 className="text-xl sm:text-2xl font-semibold">CyberRanjeetYadav</h2>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:block">
//         <ul className="flex gap-6 lg:gap-8 font-medium">
//           {["Home", "Skill", "Projects", "Session", "Contact"].map((item) => (
//             <li
//               key={item}
//               className="hover:text-blue-400 transition duration-200"
//             >
//               <Link to={`/${item.toLowerCase()}`}>{item}</Link>
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
//             {["Home", "Skill", "Projects", "Session", "Contact"].map((item) => (
//               <li
//                 key={item}
//                 className="hover:text-blue-400 transition duration-200"
//               >
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Skills", "Session", "Contact"];

  return (
    <header
      className={`py-4 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900 text-white flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold">CyberDeepakRajput</h2>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 lg:gap-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-blue-400 transition duration-200"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg py-4 px-6">
          <ul className="flex flex-col gap-4 font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 transition duration-200"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import {
//   FaChalkboardTeacher,
//   FaShieldAlt,
//   FaUsers,
//   FaCalendar,
//   FaUserFriends,
//   FaMapMarkerAlt,
//   FaClock,
//   FaTimes,
// } from "react-icons/fa";

// // Replace these with your actual session images
// import session1 from "../assets/sessions/session1.png";
// import session2 from "../assets/sessions/session2.png";
// import session3 from "../assets/sessions/session3.png";
// import session4 from "../assets/sessions/session4.png";
// import session5 from "../assets/sessions/session5.png";
// import session6 from "../assets/sessions/session6.png";
// import session7 from "../assets/sessions/session7.png";
// import session8 from "../assets/sessions/session8.png";
// import session9 from "../assets/sessions/session9.png";
// import session10 from "../assets/sessions/session10.png";
// import session11 from "../assets/sessions/session11.png";
// import session12 from "../assets/sessions/session12.png";

// const Sessions = () => {
//   // State for animated counters
//   const [counters, setCounters] = useState({
//     sessions: 0,
//     people: 0,
//     feedback: 0,
//   });

//   // State for selected session and modal
//   const [selectedSession, setSelectedSession] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Session data with additional details
//   const sessions = [
//     {
//       id: 1,
//       img: session1,
//       title:
//         " Awareness session on Cyber Hygien   with CyberRanjeet Yadav & Police Department Lalganj,Mirzapur",
//       date: "24 July 2025",
//       attendees: 120,
//       location: "Lalganj Mirzapur",
//       duration: "3 hours",
//       organizer: "Shrimati Indira Gandhi Degree College",
//       principal: "Dr. Ajit Singh Yadav",
//       description:
//         "Interactive workshop for high school students covering basics of cybersecurity, password management, and social media safety. Conducted in collaboration with local police department.",
//       topics: [
//         "Password Security",
//         "Social Media Safety",
//         "Cyberbullying Prevention",
//       ],
//     },
//     {
//       id: 2,
//       img: session2,
//       title: "Awareness Session on Cyber Hygiene",
//       date: "04 July 2025",
//       attendees: 70,
//       location: "Block , Lalganj",
//       duration: "2 hours",
//       organizer: "AWS Convent School",
//       principal: "Dr. Ramsundar Maurya ji",
//       description:
//         "Focused on teaching cyber hygiene practices to senior citizens and non-tech savvy individuals. Covered topics like identifying phishing emails and secure online transactions.",
//       topics: [
//         "Phishing Identification",
//         "Secure Online Transactions",
//         "Device Security",
//       ],
//     },
//     {
//       id: 3,
//       img: session3,
//       title:
//         "Community Internet Safety and Cyber Safety with Cyber Ranjeet Yadav",
//       date: "28 July 2025",
//       attendees: 200,
//       location: "Vijaypur Mirzapur",
//       duration: "4 hours",
//       organizer: "PMPT Pg,College,Vijapur,Mirzapur",
//       principal: "Dr. Rishabh Chaturvedi ji",
//       description:
//         "Comprehensive session for community members on internet safety practices, focusing on parental controls, safe browsing, and data protection.",
//       topics: ["Parental Controls", "Safe Browsing", "Data Protection"],
//     },
//     {
//       id: 4,
//       img: session4,
//       title: "Awareness on Cyber Hygiene",
//       date: "30 July 2025",
//       attendees: 200,
//       location: "BUIC College, Lalganj",
//       duration: "3 hours",
//       organizer: "Shruti Convent Public school Lalganj Mirzapur",
//       principal: "Dr. Ramesh Maurya Ji",
//       description:
//         "Special session for college students focusing on cybersecurity best practices for academic and personal digital activities.",
//       topics: [
//         "Academic Security",
//         "Personal Data Protection",
//         "Safe Social Media Usage",
//       ],
//     },
//     {
//       id: 5,
//       img: session5,
//       title: "Awareness Session on Cyber Hygiene",
//       date: "21 Aug 2025",
//       attendees: 180,
//       location: "Santnagar ",
//       duration: "2.5 hours",
//       organizer:
//         "Shri Mahavir Prasad Memorial InterCollege Santnagar, Mirzapur",
//       principal: " Dr.BholaNath Yadav Ji",
//       description:
//         "Focused session for teachers and school staff on protecting institutional data and educating students about cybersecurity.",
//       topics: [
//         "Institutional Data Protection",
//         "Student Education",
//         "Network Security",
//       ],
//     },
//     {
//       id: 6,
//       img: session6,
//       title:
//         "Cyber Hygiene Debate held in collaboration with S.I 'Shashi Tiwari', Cyber Cell Mirzapur.",
//       date: "7 Aug 2025",
//       attendees: 20,
//       location: "Cyber Cell Office, Mirzapur",
//       duration: "3 hours",
//       organizer: "UP Police Cyber Cell",
//       principal: "S.I Shashi Tiwari",
//       description:
//         "A competitive debate on cyber hygiene practices with participants from local colleges. Judges included cyber cell officers and cybersecurity experts.",
//       topics: [
//         "Ethical Hacking",
//         "Data Privacy Laws",
//         "Cyber Hygiene Best Practices",
//       ],
//     },
//     {
//       id: 7,
//       img: session7,
//       title:
//         "Awareness Session on Cyber Hygiene with Depart and BUIC Lalganj, Mirzapur",
//       date: "29 Aug 2025",
//       attendees: 200,
//       location: "BUIC College Auditorium",
//       duration: "3 hours",
//       organizer: "BUIC College ",
//       principal: "Dr. Dharmjit Singh",
//       description:
//         "Joint session with college department heads to develop cybersecurity protocols for educational institutions.",
//       topics: [
//         "Institutional Protocols",
//         "Network Security",
//         "Data Management",
//       ],
//     },
//     {
//       id: 8,
//       img: session8,
//       title:
//         "Awareness Session on Cyber Hygiene with students and teacher's in BUIC Lalganj, Mirzapur",
//       date: "30 Aug 2025",
//       attendees: 150,
//       location: "BUIC College Campus",
//       duration: "4 hours",
//       organizer: "BUIC College",
//       principal: "Dr. Dharmjit Singh",
//       description:
//         "Hands-on workshop for both students and teachers focusing on practical cybersecurity measures for academic environments.",
//       topics: [
//         "Practical Security Measures",
//         "Academic Integrity",
//         "Digital Citizenship",
//       ],
//     },
//     {
//       id: 9,
//       img: session9,
//       title:
//         "Awareness Session on Cyber Hygiene with students and teacher's in Janchetna I,C Lahangpur, Mirzapur",
//       date: "2 Sept 2025",
//       attendees: 140,
//       location: "Janchetna Inter College, Lahangpur",
//       duration: "3 hours",
//       organizer: "Janchetna Inter College",
//       principal: "Dr. Raj Kumar Patel",
//       description:
//         "Special session for rural school focusing on basic cybersecurity practices and internet safety for first-time internet users.",
//       topics: [
//         "Basic Internet Safety",
//         "Password Management",
//         "Identifying Online Scams",
//       ],
//     },

//     {
//       id: 10,
//       img: session10,
//       title:
//         "Awareness Session on Cyber Hygiene with students and teachers `Krishna Institute of Pharmacy`with our department in Lalganj Mirzapur UP",
//       date: "11 september 2025",
//       attendees: 250,
//       location:
//         " Rewa Road Lalganj Khajuri, Lalganj, Mirzapur, Uttar Pradesh 231211",
//       duration: "3 hour",
//       organizer: "KRISHNA INSTITUTE OF PHARMACY",
//       principal: "Dr. RamKrishnGopal Maurya Ji",
//       description:
//         "Hands-on workshop for both students and teachers focusing on practical cybersecurity measures for academic environments.",
//       topics: [
//         "Institutional Data Protection",
//         "Student Education",
//         "Network Security",
//         "Basic Internet Safety",
//         "Password Management",
//         "Identifying Online Scams",
//       ],
//     },
//     {
//       id: 11,
//       img: session11,
//       title:
//         "Cyber Hygien and Cyber Safety with Student , Teachers  & Santnagar Thana Stop Ladies Contable",
//       date: "12 september 2025",
//       attendees: 120,
//       location: "Dipnagar Kalwari root",
//       duration: "2 hours",
//       organizer: "Project Mala School",
//       principal: "RamaShankar Yadav",
//       description:
//         "Interactive workshop for high school students covering basics of cybersecurity, password management, and social media safety. Conducted in collaboration with local police department.",
//       topics: [
//         "Password Security",
//         "Social Media Safety",
//         "Cyberbullying Prevention",
//       ],
//     },
//     {
//       id: 12,
//       img: session12,
//       title:
//         "Cyber Hygien and Cyber Safety with Student , Teachers &  Lalganj Lalimati Kathwar",
//       date: "5 september 2025",
//       attendees: 120,
//       location: "Kathwar,Lalganj Mirzapur",
//       duration: "2 hours",
//       organizer: "Ms Public  School",
//       principal: "Dr. Rajkumar Singh",
//       description:
//         "Interactive workshop for high school students covering basics of cybersecurity, password management, and social media safety. Conducted in collaboration with local police department.",
//       topics: [
//         "Password Security",
//         "Social Media Safety",
//         "Cyberbullying Prevention",
//       ],
//     },
//   ];

//   // Stats data
//   const stats = [
//     {
//       value: `${counters.sessions}+`,
//       label: "Sessions Conducted",
//       icon: <FaChalkboardTeacher className="text-blue-400 text-2xl" />,
//       target: 50,
//       duration: 2000,
//     },
//     {
//       value: `${counters.people}+`,
//       label: "People Trained",
//       icon: <FaUsers className="text-blue-400 text-2xl" />,
//       target: 50,
//       duration: 2500,
//     },
//     {
//       value: `${counters.feedback}%`,
//       label: "Positive Feedback",
//       icon: <FaShieldAlt className="text-blue-400 text-2xl" />,
//       target: 100,
//       duration: 3000,
//     },
//   ];

//   // Counter animation effect
//   useEffect(() => {
//     const animateCounters = () => {
//       const increment = (key, target, duration) => {
//         const startTime = performance.now();
//         const step = (timestamp) => {
//           const progress = Math.min((timestamp - startTime) / duration, 1);
//           const currentValue = Math.floor(progress * target);

//           setCounters((prev) => ({
//             ...prev,
//             [key]: currentValue,
//           }));

//           if (progress < 1) {
//             requestAnimationFrame(step);
//           }
//         };
//         requestAnimationFrame(step);
//       };

//       increment("sessions", 50, 2000);
//       increment("people", 50, 2500);
//       increment("feedback", 100, 3000);
//     };

//     animateCounters();
//   }, []);

//   // Function to open modal with session details
//   const openSessionDetails = (session) => {
//     setSelectedSession(session);
//     setIsModalOpen(true);
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedSession(null);
//   };

//   return (
//     <main
//       id="session"
//       className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <section className="text-center mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//             Cybersecurity{" "}
//             <span className="text-blue-400">Awareness Sessions</span>
//           </h1>
//           <p className="text-gray-300 max-w-3xl mx-auto text-lg">
//             As a certified Cyber Volunteer, I conduct security awareness
//             sessions for schools, police departments, and government
//             organizations to strengthen India's digital defenses.
//           </p>
//         </section>

//         {/* Stats with Animated Counters */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4"
//             >
//               {stat.icon}
//               <div>
//                 <p className="text-2xl font-bold">{stat.value}</p>
//                 <p className="text-gray-400">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Session Gallery */}
//         <section>
//           <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center">
//             <FaChalkboardTeacher className="mr-2 text-blue-400" />
//             Recent Sessions
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {sessions.map((session) => (
//               <div
//                 key={session.id}
//                 className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={session.img}
//                     alt={session.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{session.title}</h3>
//                   <div className="flex justify-between text-gray-400 text-sm mb-4">
//                     <span>📅 {session.date}</span>
//                     <span>👥 {session.attendees} attendees</span>
//                   </div>
//                   <button
//                     onClick={() => openSessionDetails(session)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 w-full"
//                   >
//                     View Session Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* Session Details Modal */}
//       {isModalOpen && selectedSession && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
//           <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
//               <h2 className="text-2xl font-bold text-blue-400">
//                 Session Details
//               </h2>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-400 hover:text-white"
//               >
//                 <FaTimes className="text-xl" />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="h-64 overflow-hidden rounded-lg mb-6">
//                 <img
//                   src={selectedSession.img}
//                   alt={selectedSession.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <h3 className="text-2xl font-bold mb-4">
//                 {selectedSession.title}
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 <div className="flex items-center">
//                   <FaCalendar className="text-blue-400 mr-2" />
//                   <span className="text-gray-300">
//                     Date: {selectedSession.date}
//                   </span>
//                 </div>

//                 <div className="flex items-center">
//                   <FaUserFriends className="text-blue-400 mr-2" />
//                   <span className="text-gray-300">
//                     Attendees: {selectedSession.attendees}
//                   </span>
//                 </div>

//                 <div className="flex items-center">
//                   <FaMapMarkerAlt className="text-blue-400 mr-2" />
//                   <span className="text-gray-300">
//                     Location: {selectedSession.location}
//                   </span>
//                 </div>

//                 <div className="flex items-center">
//                   <FaClock className="text-blue-400 mr-2" />
//                   <span className="text-gray-300">
//                     Duration: {selectedSession.duration}
//                   </span>
//                 </div>

//                 <div className="flex items-center">
//                   <FaClock className="text-blue-400 mr-2" />
//                   <span className="text-gray-300">
//                     Principal: {selectedSession.principal}
//                   </span>
//                 </div>

//                 <div className="flex items-center md:col-span-2">
//                   <FaChalkboardTeacher className="text-blue-400 mr-2" />
//                   <span className="text-gray-300">
//                     Organizer: {selectedSession.organizer}
//                   </span>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h4 className="text-xl font-semibold mb-2 text-blue-400">
//                   Description
//                 </h4>
//                 <p className="text-gray-300">{selectedSession.description}</p>
//               </div>

//               <div>
//                 <h4 className="text-xl font-semibold mb-2 text-blue-400">
//                   Topics Covered
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedSession.topics.map((topic, index) => (
//                     <span
//                       key={index}
//                       className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
//                     >
//                       {topic}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="p-4 border-t border-gray-700 flex justify-end">
//               <button
//                 onClick={closeModal}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Sessions;

import React, { useState, useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaShieldAlt,
  FaUsers,
  FaCalendar,
  FaUserFriends,
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
  FaUserTie,
  FaSchool,
  FaBolt,
  FaRocket,
} from "react-icons/fa";

// Replace these with your actual session images
import session1 from "../assets/sessions/session1.png";
import session2 from "../assets/sessions/session2.png";
import session3 from "../assets/sessions/session3.png";
import session4 from "../assets/sessions/session4.png";
import session5 from "../assets/sessions/session5.png";
import session6 from "../assets/sessions/session6.png";
import session7 from "../assets/sessions/session7.png";
import session8 from "../assets/sessions/session8.png";
import session9 from "../assets/sessions/session9.png";
import session10 from "../assets/sessions/session10.png";
import session11 from "../assets/sessions/session11.png";
import session12 from "../assets/sessions/session12.png";

const Sessions = () => {
  // State for animated counters
  const [counters, setCounters] = useState({
    sessions: 0,
    people: 0,
    feedback: 0,
  });

  // State for selected session and modal
  const [selectedSession, setSelectedSession] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedSessions, setAnimatedSessions] = useState([]);

  // Session data with additional details
  const sessions = [
    {
      id: 1,
      img: session1,
      title:
        "Awareness session on Cyber Hygiene with CyberRanjeet Yadav & Police Department Lalganj, Mirzapur",
      date: "24 July 2025",
      attendees: 120,
      location: "Lalganj Mirzapur",
      duration: "3 hours",
      organizer: "Shrimati Indira Gandhi Degree College",
      principal: "Dr. Ajit Singh Yadav",
      description:
        "Interactive workshop for high school students covering basics of cybersecurity, password management, and social media safety. Conducted in collaboration with local police department.",
      topics: [
        "Password Security",
        "Social Media Safety",
        "Cyberbullying Prevention",
      ],
      type: "college",
      icon: <FaSchool />,
    },
    {
      id: 2,
      img: session2,
      title: "Awareness Session on Cyber Hygiene",
      date: "04 July 2025",
      attendees: 70,
      location: "Block, Lalganj",
      duration: "2 hours",
      organizer: "AWS Convent School",
      principal: "Dr. Ramsundar Maurya ji",
      description:
        "Focused on teaching cyber hygiene practices to senior citizens and non-tech savvy individuals. Covered topics like identifying phishing emails and secure online transactions.",
      topics: [
        "Phishing Identification",
        "Secure Online Transactions",
        "Device Security",
      ],
      type: "school",
      icon: <FaSchool />,
    },
    {
      id: 3,
      img: session3,
      title:
        "Community Internet Safety and Cyber Safety with Cyber Ranjeet Yadav",
      date: "28 July 2025",
      attendees: 200,
      location: "Vijaypur Mirzapur",
      duration: "4 hours",
      organizer: "PMPT Pg College, Vijapur, Mirzapur",
      principal: "Dr. Rishabh Chaturvedi ji",
      description:
        "Comprehensive session for community members on internet safety practices, focusing on parental controls, safe browsing, and data protection.",
      topics: ["Parental Controls", "Safe Browsing", "Data Protection"],
      type: "community",
      icon: <FaUsers />,
    },
    {
      id: 4,
      img: session4,
      title: "Awareness on Cyber Hygiene",
      date: "30 July 2025",
      attendees: 200,
      location: "BUIC College, Lalganj",
      duration: "3 hours",
      organizer: "Shruti Convent Public School Lalganj Mirzapur",
      principal: "Dr. Ramesh Maurya Ji",
      description:
        "Special session for college students focusing on cybersecurity best practices for academic and personal digital activities.",
      topics: [
        "Academic Security",
        "Personal Data Protection",
        "Safe Social Media Usage",
      ],
      type: "school",
      icon: <FaSchool />,
    },
    {
      id: 5,
      img: session5,
      title: "Awareness Session on Cyber Hygiene",
      date: "21 Aug 2025",
      attendees: 180,
      location: "Santnagar",
      duration: "2.5 hours",
      organizer:
        "Shri Mahavir Prasad Memorial InterCollege Santnagar, Mirzapur",
      principal: "Dr. Bhola Nath Yadav Ji",
      description:
        "Focused session for teachers and school staff on protecting institutional data and educating students about cybersecurity.",
      topics: [
        "Institutional Data Protection",
        "Student Education",
        "Network Security",
      ],
      type: "school",
      icon: <FaSchool />,
    },
    {
      id: 6,
      img: session6,
      title:
        "Cyber Hygiene Debate held in collaboration with S.I 'Shashi Tiwari', Cyber Cell Mirzapur",
      date: "7 Aug 2025",
      attendees: 20,
      location: "Cyber Cell Office, Mirzapur",
      duration: "3 hours",
      organizer: "UP Police Cyber Cell",
      principal: "S.I Shashi Tiwari",
      description:
        "A competitive debate on cyber hygiene practices with participants from local colleges. Judges included cyber cell officers and cybersecurity experts.",
      topics: [
        "Ethical Hacking",
        "Data Privacy Laws",
        "Cyber Hygiene Best Practices",
      ],
      type: "police",
      icon: <FaShieldAlt />,
    },
    {
      id: 7,
      img: session7,
      title:
        "Awareness Session on Cyber Hygiene with Department and BUIC Lalganj, Mirzapur",
      date: "29 Aug 2025",
      attendees: 200,
      location: "BUIC College Auditorium",
      duration: "3 hours",
      organizer: "BUIC College",
      principal: "Dr. Dharmjit Singh",
      description:
        "Joint session with college department heads to develop cybersecurity protocols for educational institutions.",
      topics: [
        "Institutional Protocols",
        "Network Security",
        "Data Management",
      ],
      type: "college",
      icon: <FaSchool />,
    },
    {
      id: 8,
      img: session8,
      title:
        "Awareness Session on Cyber Hygiene with students and teachers in BUIC Lalganj, Mirzapur",
      date: "30 Aug 2025",
      attendees: 150,
      location: "BUIC College Campus",
      duration: "4 hours",
      organizer: "BUIC College",
      principal: "Dr. Dharmjit Singh",
      description:
        "Hands-on workshop for both students and teachers focusing on practical cybersecurity measures for academic environments.",
      topics: [
        "Practical Security Measures",
        "Academic Integrity",
        "Digital Citizenship",
      ],
      type: "college",
      icon: <FaSchool />,
    },
    {
      id: 9,
      img: session9,
      title:
        "Awareness Session on Cyber Hygiene with students and teachers in Janchetna I,C Lahangpur, Mirzapur",
      date: "2 Sept 2025",
      attendees: 140,
      location: "Janchetna Inter College, Lahangpur",
      duration: "3 hours",
      organizer: "Janchetna Inter College",
      principal: "Dr. Raj Kumar Patel",
      description:
        "Special session for rural school focusing on basic cybersecurity practices and internet safety for first-time internet users.",
      topics: [
        "Basic Internet Safety",
        "Password Management",
        "Identifying Online Scams",
      ],
      type: "school",
      icon: <FaSchool />,
    },
    {
      id: 10,
      img: session10,
      title:
        "Awareness Session on Cyber Hygiene with students and teachers at Krishna Institute of Pharmacy",
      date: "11 September 2025",
      attendees: 250,
      location:
        "Rewa Road Lalganj Khajuri, Lalganj, Mirzapur, Uttar Pradesh 231211",
      duration: "3 hours",
      organizer: "KRISHNA INSTITUTE OF PHARMACY",
      principal: "Dr. RamKrishnGopal Maurya Ji",
      description:
        "Hands-on workshop for both students and teachers focusing on practical cybersecurity measures for academic environments.",
      topics: [
        "Institutional Data Protection",
        "Student Education",
        "Network Security",
        "Basic Internet Safety",
        "Password Management",
        "Identifying Online Scams",
      ],
      type: "college",
      icon: <FaSchool />,
    },
    {
      id: 11,
      img: session11,
      title:
        "Cyber Hygiene and Cyber Safety with Students, Teachers & Santnagar Thana Stop Ladies Constable",
      date: "12 September 2025",
      attendees: 120,
      location: "Dipnagar Kalwari Root",
      duration: "2 hours",
      organizer: "Project Mala School",
      principal: "RamaShankar Yadav",
      description:
        "Interactive workshop for high school students covering basics of cybersecurity, password management, and social media safety. Conducted in collaboration with local police department.",
      topics: [
        "Password Security",
        "Social Media Safety",
        "Cyberbullying Prevention",
      ],
      type: "school",
      icon: <FaSchool />,
    },
    {
      id: 12,
      img: session12,
      title:
        "Cyber Hygiene and Cyber Safety with Students, Teachers at Lalganj Lalimati Kathwar",
      date: "5 September 2025",
      attendees: 120,
      location: "Kathwar, Lalganj Mirzapur",
      duration: "2 hours",
      organizer: "Ms Public School",
      principal: "Dr. Rajkumar Singh",
      description:
        "Interactive workshop for high school students covering basics of cybersecurity, password management, and social media safety. Conducted in collaboration with local police department.",
      topics: [
        "Password Security",
        "Social Media Safety",
        "Cyberbullying Prevention",
      ],
      type: "school",
      icon: <FaSchool />,
    },
  ];

  // Stats data with enhanced animations
  const stats = [
    {
      value: `${counters.sessions}+`,
      label: "Sessions Conducted",
      icon: <FaChalkboardTeacher className="text-3xl" />,
      target: 50,
      duration: 2000,
      color: "from-blue-500 to-cyan-400",
    },
    {
      value: `${counters.people.toLocaleString()}+`,
      label: "People Trained",
      icon: <FaUsers className="text-3xl" />,
      target: 50,
      duration: 2500,
      color: "from-green-500 to-emerald-400",
    },
    {
      value: `${counters.feedback}%`,
      label: "Positive Feedback",
      icon: <FaShieldAlt className="text-3xl" />,
      target: 100,
      duration: 3000,
      color: "from-purple-500 to-pink-400",
    },
  ];

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const increment = (key, target, duration) => {
        const startTime = performance.now();
        const step = (timestamp) => {
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentValue = Math.floor(progress * target);

          setCounters((prev) => ({
            ...prev,
            [key]: currentValue,
          }));

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      };

      increment("sessions", 50, 2000);
      increment("people", 50, 2500);
      increment("feedback", 100, 3000);
    };

    // Animate sessions appearance
    const timer = setTimeout(() => {
      setAnimatedSessions(sessions);
    }, 500);

    animateCounters();
    return () => clearTimeout(timer);
  }, []);

  // Function to open modal with session details
  const openSessionDetails = (session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
  };

  // Get type color
  const getTypeColor = (type) => {
    const colors = {
      college: "from-blue-500 to-cyan-400",
      school: "from-green-500 to-emerald-400",
      community: "from-purple-500 to-pink-400",
      police: "from-red-500 to-orange-400",
    };
    return colors[type] || colors.college;
  };

  return (
    <main
      id="session"
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
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <FaBolt className="text-yellow-400 animate-pulse" />
            <span className="text-blue-300 font-semibold text-sm tracking-wide">
              AWARENESS SESSIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Cybersecurity{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Awareness Sessions
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            As a certified Cyber Volunteer, I conduct security awareness
            sessions for schools, police departments, and government
            organizations to strengthen India's digital defenses.
          </p>
        </section>

        {/* Enhanced Stats with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Session Gallery */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold flex items-center">
                <FaChalkboardTeacher className="mr-4 text-blue-400" />
                Recent <span className="text-blue-400 ml-2">Sessions</span>
              </h2>
              <p className="text-gray-400 mt-2">
                Interactive cybersecurity workshops and awareness programs
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-blue-400 text-sm font-semibold">
                {sessions.length} Sessions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {animatedSessions.map((session, index) => (
              <div
                key={session.id}
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={session.img}
                    alt={session.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(
                        session.type
                      )} text-white shadow-lg`}
                    >
                      {session.type.toUpperCase()}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(
                        session.type
                      )}`}
                    >
                      {session.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight flex-1">
                      {session.title}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <FaCalendar className="text-blue-400" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUserFriends className="text-green-400" />
                      <span>{session.attendees} attendees</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openSessionDetails(session)}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <FaRocket />
                    <span>View Session Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Enhanced Session Details Modal */}
      {isModalOpen && selectedSession && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-800/95 backdrop-blur-md p-6 flex justify-between items-center border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${getTypeColor(
                    selectedSession.type
                  )}`}
                >
                  {selectedSession.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Session Details
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {selectedSession.type.toUpperCase()} SESSION
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-700/50 rounded-lg"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image */}
              <div className="h-80 overflow-hidden rounded-xl mb-6 relative">
                <img
                  src={selectedSession.img}
                  alt={selectedSession.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                {selectedSession.title}
              </h3>

              {/* Session Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <FaCalendar className="text-blue-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Date</p>
                      <p className="text-white font-semibold">
                        {selectedSession.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <FaUserFriends className="text-green-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Attendees</p>
                      <p className="text-white font-semibold">
                        {selectedSession.attendees} People
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <FaClock className="text-yellow-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-semibold">
                        {selectedSession.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <FaMapMarkerAlt className="text-red-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-semibold">
                        {selectedSession.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <FaUserTie className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Principal</p>
                      <p className="text-white font-semibold">
                        {selectedSession.principal}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <FaChalkboardTeacher className="text-cyan-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Organizer</p>
                      <p className="text-white font-semibold">
                        {selectedSession.organizer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                  <FaBolt className="mr-2" />
                  Session Overview
                </h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedSession.description}
                </p>
              </div>

              {/* Topics Covered */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                  <FaShieldAlt className="mr-2" />
                  Topics Covered
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedSession.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30 backdrop-blur-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-800/95 backdrop-blur-md p-6 border-t border-gray-700/50 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Close Session Details
              </button>
            </div>
          </div>
        </div>
      )}

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </main>
  );
};

export default Sessions;

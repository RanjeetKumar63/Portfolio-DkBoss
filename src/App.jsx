// App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skill";

import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./pages/Footer";

import Sessions from "./pages/Sessions";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/session" element={<Sessions />} />
        </Routes> */}
        <Home />
        <Skill />

        <Sessions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

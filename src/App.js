import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
import React from "react";
import NaveBare from "./components/NaveBare";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Certificates from "./components/pages/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-serif">
      <NaveBare />

      {/* Each section has an id for scrolling */}
      <section id="home "
        className=""
      >
        <Home />
      </section>
      <hr className="dark:bg-gray-600" />
      <section id="about">
        <About />
      </section>
      <hr className="dark:bg-gray-600" />
      <section id="skills">
        <Skills />
      </section>
      <hr className="dark:bg-gray-600" />
      <section id="projects">
        <Projects />
      </section>
      <hr className="dark:bg-gray-600" />
      <section id="certificates">
        <Certificates />
      </section>
      <hr className="dark:bg-gray-600" />
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;

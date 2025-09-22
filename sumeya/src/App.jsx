import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NaveBare from './components/NaveBare';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Certificates from './components/pages/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
     <NaveBare />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

 
export default App


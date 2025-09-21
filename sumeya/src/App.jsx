import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NaveBare from './components/NaveBare';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Certificates from './components/pages/Certificates';

function App() {
  return (
    <Router>
      <NaveBare />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

 
export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './componenets/NavBar';
import About from './componenets/About';
import Project from './componenets/Projects';
import Contact from './componenets/Contact';


const App: React.FC = () => {
  return (
    <div>
      <img src="./viswa.jpg" alt="Profile" width={100} style={{ borderRadius: '50%' }} />
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to MST Technological!</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import {Route, Routes} from "react-router-dom";
import "./Apps.scss";
import Navbar from "./components/Navbar.jsx";
import About from "./components/pages/About/About.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Generator from "./components/pages/Generator/Generator.jsx";
import Homepage from "./components/pages/Homepage/Homepage.jsx";
import Meme from "./components/pages/Meme/Meme.jsx";
import Search from "./components/pages/Search/Search.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="generator" element={<Generator />}/>
        <Route path="/" element={<Homepage />}/>
        <Route path="/meme" element={<Meme />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </div>
  );
};

export default App;
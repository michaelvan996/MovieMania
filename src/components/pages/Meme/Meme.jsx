import React from 'react';
import "./meme.css";
import MemeHeader from "./MemeComponents/MemeHeader.jsx";
import Footer from "../Footer.jsx";
import MemeGenerator from "./MemeComponents/MemeGenerator.jsx";
const Meme = () => {
  return (
    <div className="meme-big-container">
      <MemeHeader />
      <MemeGenerator />
      <Footer />
    </div>
  )
}

export default Meme

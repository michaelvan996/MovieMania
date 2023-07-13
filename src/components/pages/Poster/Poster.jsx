import React from 'react'
import CreatePoster from "./PosterComponents/CreatePoster.jsx";
import "./poster.css";
import Footer from "../Footer.jsx";
import PosterHead from "./PosterComponents/PosterHead.jsx";

const Poster = () => {
  return (
    <div>
      <PosterHead />
      <CreatePoster />
      <Footer />
    </div>
  )
}

export default Poster;

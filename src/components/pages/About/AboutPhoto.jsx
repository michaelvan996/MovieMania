import React from 'react'
// import "./About.css";
// import aboutImage from './AboutImg/AboutPhoto.png';
import aboutImage from './AboutImg/AboutPhoto.png';

const AboutPhoto = () => {
  return (
    <div className="photo--container">
      <img
      className="About--image"
      // src="https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif"
      src= {aboutImage}
      alt="new"
      />
    </div>
  )
}

export default AboutPhoto;

import React from 'react';
import homeGrid from "../HomeImages/homegrid.png";

const HomeTop = () => {
    return (
        <section className="home-top-container">
            <div className="home-image-container">
                <img className="home-image" src={homeGrid} />
            </div>
            <div className="home-top-text-container">
                <h2 className="movie-experience-title">Movie Experiences</h2>
                <p className="movie-experience-text">Enjoy state of the art movies and unique interactive activity through cinema entertainment and innovative AI technology</p>
            </div>
        </section>
    )
}

export default HomeTop;

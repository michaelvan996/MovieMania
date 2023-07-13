import React from "react";
import "./homePage.css";
import HomeHeader from "./HomeComponents/HomeHeader.jsx";
import HomeTop from "./HomeComponents/HomeTop.jsx";
import HomeCard from "./HomeComponents/HomeCard.jsx";
import Footer from "../footer.jsx";
import data from "./movieData.js";

const Homepage = () => {

  const cards = data.map(card => {
    return (
      <HomeCard
        img={card.coverImg}
        rating={card.stats.rating}
        review={card.stats.reviewCount}
        title={card.title}
        price={card.price}
      />
    )
  })

  return (
    <div>
      <HomeHeader />
      <HomeTop />
      <div className="cards-container">
        {cards}
      </div>
      <div className="home-bottom-text-container">
        <h2 className="movie-experience-title">Entertainment Activity</h2>
        <p className="movie-experience-text">Enjoy state of the art movies and unique interactive activity through cinema entertainment and innovative AI technology</p>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

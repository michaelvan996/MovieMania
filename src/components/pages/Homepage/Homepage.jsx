import React from "react";
import "./homePage.css";
import HomeHeader from "./HomeComponents/HomeHeader.jsx";
import HomeTop from "./HomeComponents/HomeTop.jsx";
import HomeCard from "./HomeComponents/HomeCard.jsx";

const Homepage = () => {
  return (
    <div>
      <HomeHeader />
      <HomeTop />
      <HomeCard />
    </div>
  );
};

export default Homepage;

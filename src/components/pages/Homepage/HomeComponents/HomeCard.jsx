import React from 'react';
import blade from "../HomeImages/blade.jpg";
import popcorn from "../HomeImages/popcorn.png";
const HomeCard = () => {
    return (
        <div className="card">
            <img src={blade} className="card--image"/>
            <div className="card-stats">
                <img src={popcorn} className="popcorn"/>
                <span>78%</span>
                <span className="gray">(44k)</span>
            </div>
            <h3><span className="bold">Runner Blade 2049</span></h3>
            <p>From $15</p>
        </div>
    )
}

export default HomeCard;

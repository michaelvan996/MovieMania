import React from 'react';
// import blade from "../HomeImages/blade.jpg";
import popcorn from "../HomeImages/popcorn.png";
// import data from "../movieData.js";


const HomeCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} className="card--image"/>
            <div className="card-stats">
                <img src={popcorn} className="popcorn"/>
                <span className="rating">{props.rating}</span>
                <span className="gray review">({props.review})</span>
            </div>
            <h3 className="movie-title"><span className="bold">{props.title}</span></h3>
            <p className="movie-price">From ${props.price}</p>
        </div>
    )
}



export default HomeCard;

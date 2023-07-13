import React from "react";
import memeData from "../memeData.js";

const MemeGenerator = () => {
    const getPosterImage = () => {
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(randomNumber);
        const {url} = memesArray[randomNumber];
        console.log(url);
    }
    return (
        <main className="main-meme-container">
            <form className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getPosterImage}
                >
                    Generate meme photo
                </button>
            </form>
        </main>
    )
}

export default MemeGenerator;

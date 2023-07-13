import React, { useState } from "react";

const CreatePoster = () => {
  //states- input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const findMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b750fa92dfec05526c85d80e14c4d47a&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="poster-form" onSubmit={findMovies}>
        <div className="poster-element-container">
            <input
            className="poster-input"
            type="text"
            name="query"
            placeholder="Type in movie name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button className="poster-button" type="submit">
            Get Poster
            </button>
        </div>
      </form>
      <div className="poster-card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="poster-card" key={movie.id}>
              <img
                className="poster-card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default CreatePoster;

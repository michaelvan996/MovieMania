import React, { useState } from "react";
import popcorn from "./popcorn.png";

const SearchMovies = () => {
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
      <form className="search-form" onSubmit={findMovies}>
        <label className="search-label" htmlFor="query">
          Search
        </label>
        <input
          className="search-input"
          type="text"
          name="query"
          placeholder="Type in movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="search-card" key={movie.id}>
              <img
                className="search-card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="search-car--content">
                <h3 className="search-card--title">{movie.title}</h3>
                <p className="search-card-p">
                  <small>
                    RELEASE DATE:{" "}
                    {movie.release_date ? movie.release_date : "N/A"}
                  </small>
                </p>
                <div className="card-stats">
                  <small>
                    <img src={popcorn} className="popcorn" />
                    <span className="rating">
                      RATING:{" "}
                      {movie.vote_average
                        ? Math.floor(movie.vote_average)
                        : "N/A"}
                      /10
                    </span>
                  </small>
                  <p className="card--desc">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchMovies;

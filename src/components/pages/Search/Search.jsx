import React from 'react'
import "./search.css";
import SearchMovies from "./SearchComponents/SearchMovies.jsx";
import SearchImage from "./SearchComponents/SearchImage.jsx";
import Footer from "../footer.jsx";

const Search = () => {
  return (
    <div className="search-container">
      <h1 className="search-title">Find Your Movie</h1>
      <SearchImage />
      <SearchMovies />
      <Footer />
    </div>
  )
}

export default Search

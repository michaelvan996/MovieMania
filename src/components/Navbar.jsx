import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">MovieMania</Link>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/generator">Generator</NavLink>
        </li>
        <li>
          <NavLink to="/meme">Meme</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

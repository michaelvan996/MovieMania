import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        MovieMania
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menu ? "open" : ""}>
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

import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavBar">
      <h1>
      <Link to="/">Kalvium</Link>
      </h1>
      <ul className="nav">
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/registration">Registration Form</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

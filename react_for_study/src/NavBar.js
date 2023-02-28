import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">Main</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">Main</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/todolist">Todo List</Link>
      <Link to="/users">User</Link>
    </div>
  );
}

export default NavBar;

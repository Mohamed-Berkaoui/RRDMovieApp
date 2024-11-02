import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <h2>logo</h2>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/addfilm">
          <p>Add Film</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

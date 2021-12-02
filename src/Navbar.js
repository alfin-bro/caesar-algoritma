import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <header className="container">
      <nav>
        <div className="logo">Kriptografi</div>
        <ul className="nav-menu">
          <li className="menu">
            <Link to="/">Home</Link>
          </li>
          <li className="menu">
            <Link to="/tools">Alat</Link>
          </li>
          <li className="menu">
            <Link to="/article">Artikel</Link>
          </li>
        </ul>
        <button className="btn-primary1">Mulai</button>
      </nav>
      {children}
    </header>
  );
};

export default Navbar;

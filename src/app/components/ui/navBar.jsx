import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav nav-pills bg-dark">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Main
            </Link>
          </li>
          {
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="projects">
                Search
              </Link>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

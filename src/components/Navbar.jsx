import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="#">
            WISE
          </a>
          <button
            className="navbar-toggler text-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a> */}
              </li>
              <li className="nav-item mx-3">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/get-involved" className="nav-link">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

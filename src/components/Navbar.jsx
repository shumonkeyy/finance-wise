import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navigation">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand ms-4" href="#">
            WISE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex mx-auto">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item mx-3">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                  {/* <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a> */}
                </li>
                <li class="nav-item mx-3">
                  <Link to="/about-us" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li class="nav-item mx-3">
                  <Link to="/get-involved" className="nav-link">
                    Get Involved
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

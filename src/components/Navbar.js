import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dash from "./Dash";

const Navbar = () => {
  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {!localStorage.getItem("token") && (
                <Link
                  className="btn btn-outline-primary mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
              )}
              {!localStorage.getItem("token") && (
                <Link
                  className="btn btn-outline-primary mx-2"
                  to="/signup"
                  role="button"
                >
                  Sign Up
                </Link>
              )}
              {localStorage.getItem("token") && <Dash/>}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

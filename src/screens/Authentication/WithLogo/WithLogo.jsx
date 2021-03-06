import React from "react";
import { Link } from "react-router-dom";

import "./WithLogo.css";
const WithLogo = props => {
  return (
    <div>
      <nav className="Authentacation__withlogo__navbar navbar navbar-expand-lg navbar-dark bg-success static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            AgroApp
          </a>
          <button
            className="Authentacation__withlogo__navbar__toggle__btn navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="Authentacation__withlogo__navbar__toggle__btn__icon navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  POST AD
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  List Business
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>{props.children}</div>
    </div>
  );
};

export default WithLogo;

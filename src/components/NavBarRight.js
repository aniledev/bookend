import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBarRight extends Component {
  render() {
    return (
      <div
        className="navbar-right collapse navbar-collapse flex-row-reverse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="nav-link" to="/features">
            Features
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/sign-up">
            Sign Up
          </Link>
          <Link className="nav-link" to="/log-in">
            Log In
          </Link>
        </div>
      </div>
    );
  }
}

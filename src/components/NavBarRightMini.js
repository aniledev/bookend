import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBarRightMini extends Component {
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
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    );
  }
}

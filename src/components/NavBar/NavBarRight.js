import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBarRight extends Component {
  render() {
    return (
      <div
        className="navbar-right collapse navbar-collapse flex-row-reverse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/features">
            Features
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink className="nav-link" to="/log-in">
            Log In
          </NavLink>
        </div>
      </div>
    );
  }
}

import React, { Component } from "./node_modules/react";
import { NavLink } from "./node_modules/react-router-dom";

export default class NavBarRightMini extends Component {
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
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </div>
      </div>
    );
  }
}

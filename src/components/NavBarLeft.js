import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBarLeft extends Component {
  render() {
    return (
      <div className="nav-bar-left">
        <Link className="navbar-brand brand-title" to="/">
          Bookend
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class NavBarLeft extends Component {
  render() {
    return (
      <div class="nav-bar-left">
        <a class="navbar-brand brand-title" href="/index.html">
          Bookend
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class NavBarRight extends Component {
  render() {
    return (
      <div
        class="navbar-right collapse navbar-collapse flex-row-reverse"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a class="nav-link" href="/features.html">
            Features
          </a>
          <a class="nav-link" href="/about.html">
            About
          </a>
          <a class="nav-link" href="/contact.html">
            Contact Us
          </a>
          <a class="nav-link" href="/sign-up.html">
            Sign Up
          </a>
          <a class="nav-link" href="/log-in.html">
            Log In
          </a>
        </div>
      </div>
    );
  }
}

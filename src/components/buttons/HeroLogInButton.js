import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeroLogInButton extends Component {
  render() {
    return (
      <Link className="btn btn-primary btn-lg mx-2" to="/log-in">
        Log In
      </Link>
    );
  }
}

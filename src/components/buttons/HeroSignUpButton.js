import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeroSignUpButton extends Component {
  render() {
    return (
      <Link className="btn btn-primary btn-lg mx-2" to="/sign-up">
        Sign Up
      </Link>
    );
  }
}

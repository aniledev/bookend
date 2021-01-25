import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUpButtonSmall extends Component {
  render() {
    return (
      <div className="sign-up-button container-md text-center py-3">
        <Link class="btn btn-primary" to="/search">
          Sign Up
        </Link>
      </div>
    );
  }
}

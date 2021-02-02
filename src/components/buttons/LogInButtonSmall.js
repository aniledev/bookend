import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogInButtonSmall extends Component {
  render() {
    return (
      <div class="log-in-button container-md text-center py-3">
        <Link class="btn btn-primary" to="/search">
          Log In
        </Link>
      </div>
    );
  }
}

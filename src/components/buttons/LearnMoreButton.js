import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LearnMoreButton extends Component {
  render() {
    return (
      <div className="container-md my-3">
        <Link
          className="feature-button btn btn-outline-dark btn-md"
          to="/features"
        >
          Learn More
        </Link>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LearnMoreButton extends Component {
  render() {
    return (
      <div class="container-md my-3">
        <a
          class="feature-button btn btn-outline-dark btn-md"
          href="/features.html"
          role="button"
        >
          Learn More
        </a>
      </div>
    );
  }
}

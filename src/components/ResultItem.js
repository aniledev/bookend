import React, { Component } from "react";
import "../styles/results-image.css";

export default class ResultItem extends Component {
  render() {
    let summary = this.props.description.substr(0, 650);

    return (
      <section class="row result-item d-flex justify-content-center">
        <div class="col-3 container-md d-flex text-center my-5">
          <img class="results-image" src={this.props.img} alt="Book cover" />
        </div>
        <div class="col-9 container-md d-flex flex-column text-left my-5">
          <div class="result-info container-md my-3">
            <p>
              <strong>{this.props.title}</strong> by{" "}
              <strong>{this.props.author}</strong>
            </p>
            <p>{summary}</p>
          </div>
        </div>
      </section>
    );
  }
}

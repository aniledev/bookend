import React, { Component } from "react";
import "../styles/results-image.css";

export default class ResultItem extends Component {
  render() {
    let summary = this.props.description.substr(0, 500);

    return (
      <section class="row result-item d-flex justify-content-center">
        <div class="col-3 container-md d-flex text-center my-5">
          <img
            class="results-image"
            src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-03/22BestCovers-Dorfman-03-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            alt="Book cover"
          />
        </div>
        <div class="col-9 container-md d-flex flex-column text-left my-5">
          <div class="result-info container-md my-3">
            <p>
              <strong>{this.props.title}</strong>
            </p>
            <p>{this.props.author}</p>
            <p>{summary}</p>
          </div>
        </div>
      </section>
    );
  }
}

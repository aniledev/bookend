import React, { Component } from "react";
import "../styles/results-image.css";

export default class ResultItem extends Component {
  render() {
    let summary = this.props.description.substr(0, 650);

    return (
      <section
        className="row result-item d-flex justify-content-center"
        key={this.props.id}
      >
        <div className="col-3 container-md d-flex text-center my-5">
          <img
            className="results-image"
            src={this.props.img}
            alt="Book cover"
          />
        </div>
        <div className="col-9 container-md d-flex flex-column text-left my-5">
          <div className="result-info container-md my-3">
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

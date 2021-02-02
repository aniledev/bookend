import React, { Component } from "react";
import "../styles/results-image.css";

export default class ResultItem extends Component {
  render() {
    return (
      //   <div class="row d-flex justify-content-around">
      //     <div class="col-12 col-md container-md d-flex my-5">
      //       <img
      //         class="results-image"
      //         src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-03/22BestCovers-Dorfman-03-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
      //         alt="Book cover"
      //       />
      //     </div>
      //     <div class="col-12 col-md container-md d-flex my-5">
      //       <p>{this.props.description}</p>
      //     </div>
      //   </div>

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
              <strong>Title</strong>
            </p>
            <p>
              Author Minim proident cupidatat duis duis anim dolore deserunt
              elit magna.
            </p>
            <p>
              Description Minim proident cupidatat duis duis anim dolore
              deserunt elit magna.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

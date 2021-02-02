import React, { Component } from "react";
import "../styles/results-image.css";

export default class ResultItem extends Component {
  render() {
    return (
      <div class="row d-flex justify-content-around">
        <div class="col-12 col-md container-md d-flex my-5">
          <img
            class="results-image"
            src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-03/22BestCovers-Dorfman-03-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            alt="Book cover"
          />
        </div>
        <div class="col-12 col-md container-md d-flex my-5">
          <p>
            Sint fugiat consectetur id ex ut quis non pariatur id qui. In id
            amet adipisicing nisi veniam nisi labore ipsum non. Nisi sit id et
            nulla reprehenderit nulla reprehenderit nisi sit laboris.
            Reprehenderit proident incididunt id ad magna in et ullamco culpa.
            Eu occaecat pariatur est culpa duis fugiat reprehenderit eu non
            exercitation esse labore. Veniam magna elit sint duis eiusmod
            proident non laborum laborum magna reprehenderit. Duis officia
            consectetur magna dolor sit amet id irure sunt quis nulla minim id.
          </p>
        </div>
      </div>
    );
  }
}

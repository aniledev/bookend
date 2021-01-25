import React, { Component } from "react";
import "../styles/search-image.css";

export default class SearchImage extends Component {
  render() {
    return (
      <div class="hero-images container-fluid justify-content-around d-flex pt-3 my-5">
        <img
          class="image-carousel"
          src="https://static01.nyt.com/images/2014/12/14/books/14BESTCOVERS-slide-9THC/14BESTCOVERS-slide-9THC-master675-v2.jpg"
          alt="A collage of various, colorful book covers."
        />
        <img
          class="image-carousel"
          src="https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-07/22BestCovers-Dorfman-07-mobileMasterAt3x.jpg"
          alt="A collage of various, colorful book covers."
        />
        <img
          class="image-carousel"
          src="https://static01.nyt.com/images/2014/12/14/books/14BESTCOVERS-slide-175P/14BESTCOVERS-slide-175P-master675-v2.jpg"
          alt="A collage of various, colorful book covers."
        />
      </div>
    );
  }
}

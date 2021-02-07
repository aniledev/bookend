import React, { Component } from "react";
import "../styles/search-image.css";

export default class SearchImage extends Component {
  render() {
    const imageData = [
      {
        id: 1,
        src:
          "https://static01.nyt.com/images/2014/12/14/books/14BESTCOVERS-slide-9THC/14BESTCOVERS-slide-9THC-master675-v2.jpg",
        alt: `Cover of the book "Silence Once Begun by Jesse Ball" showing a minimal portrait of a person's face against the beige background of the book cover. Where the person's mouth would be is just a clump of red scribbles.`,
      },
      {
        id: 2,
        src:
          "https://static01.nyt.com/images/2014/12/14/books/14BESTCOVERS-slide-175P/14BESTCOVERS-slide-175P-master675-v2.jpg",
        alt: `Cover of the book "Colorless Tsukuru Tazaki and His Year of Pilgrimage" showing four verticals lines—red, blue, white, and black—against a gray background.`,
      },
      {
        id: 3,
        src:
          "https://static01.nyt.com/images/2019/12/22/books/review/22BestCovers-Dorfman-07/22BestCovers-Dorfman-07-mobileMasterAt3x.jpg",
        alt: `Cover of the book "The Unwanted: America, Auschwitz, and A Village Caught in Between" showing a black and white family portrait crossed out with a red X.`,
      },
    ];

    const carousel = imageData.map((image) => (
      <img
        className="image-carousel"
        src={image.src}
        alt={image.alt}
        key={image.id}
      />
    ));

    return (
      <div className="hero-images container-fluid justify-content-around d-flex pt-3 my-5">
        {carousel}
      </div>
    );
  }
}

import React, { Component } from "react";
import "../styles/home-main-image.css";

export default class HomeMainImage extends Component {
  render() {
    return (
      <div className="container-md d-flex justify-content-center pt-3 my-5">
        <img
          className="image-hero"
          src="https://lithub.com/wp-content/uploads/2019/11/bestbookcovers2019.jpg"
          alt="A collage of various, colorful book covers."
        />
      </div>
    );
  }
}

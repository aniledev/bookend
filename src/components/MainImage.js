import React, { Component } from "react";

export default class MainImage extends Component {
  render() {
    return (
      <div class="container-md d-flex justify-content-center pt-3 my-5">
        <img
          class="image-hero"
          src="https://lithub.com/wp-content/uploads/2019/11/bestbookcovers2019.jpg"
          alt="A collage of various, colorful book covers."
        />
      </div>
    );
  }
}

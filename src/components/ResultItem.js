import React, { Component } from "react";
import "../styles/results-item.css";

export default class ResultItem extends Component {
  handleAddBook(event) {
    const { title, img, author, description } = this.props;
    console.log("Add book!");
    console.log("Add book!", { title, img, author, description });
    // in this method, I have to capture props which is the bookId
    // then use fetch POST api/users/:userId/books to add to the book list

    // hardcorded information to be replaced by props
    const body = JSON.stringify({
      title: "New book",
      thumbnailUrl: "https://www.google.com",
      shortDescription: "shortDescription",
      authors: ["Brown"],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: body,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/users/1/books", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  render() {
    let summary = this.props.description.substr(0, 650);

    return (
      <section
        className="row result-item d-flex justify-content-center"
        key={this.props.id}
      >
        <div className="col-4 container-md d-flex flex-column text-center my-5">
          <img
            className="results-image"
            src={this.props.img}
            alt="Book cover"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleAddBook}
          >
            Add Book
          </button>
        </div>
        <div className="col-8 container-md d-flex flex-column text-left my-5">
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

ResultItem.defaultProps = {
  title: "",
  description: "",
  img: "",
  author: "",
};

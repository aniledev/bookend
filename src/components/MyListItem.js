import React, { Component } from "react";
import "../styles/results-item.css";

export default class MyListItem extends Component {
  static defaultProps = {
    history: { goBack: () => {} },
  };

  handleDeleteBook(event) {
    const id = this.props.id;
    console.log("Delete book!");
    console.log(id);

    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8000/api/users/1/books/${id}`, requestOptions)
      .then((response) => {
        response.text();
        this.props.history.goBack();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    let summary = this.props.description.substr(0, 643) + " . . . ";

    return (
      <section
        className="row result-item d-flex justify-content-center"
        key={this.props.id}
      >
        <div className="col-3 container-md d-flex flex-column justify-content-center my-5">
          <img
            className="results-image"
            src={this.props.img}
            alt="Book cover"
          />
          <button
            type="button"
            className="btn btn-danger delete-book"
            onClick={this.handleDeleteBook.bind(this)}
          >
            Delete Book
          </button>
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

MyListItem.defaultProps = {
  title: "",
  description: "",
  img: "",
  author: "",
};

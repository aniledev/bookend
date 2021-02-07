import React, { Component } from "react";
import ResultItem from "./ResultItem";
import "../styles/result-list.css";
import STORE from "../dummy-store";
import context from "../context.js";

export default class ResultsList extends Component {
  static contextType = context;

  render() {
    const { books = [] } = this.context;

    console.log(books);

    const resultItems = STORE.map((book) => (
      <ResultItem
        description={book.description}
        title={book.title}
        author={book.author}
        img={book.img}
        key={book.id}
      />
    ));

    return <section className="container-md results">{resultItems}</section>;
  }
}

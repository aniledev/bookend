import React, { Component } from "react";
import ResultItem from "./ResultItem";
import "../styles/result-list.css";
import STORE from "../dummy-store";

export default class ResultsList extends Component {
  render() {
    const resultItems = STORE.map((book) => (
      <ResultItem
        description={book.description}
        title={book.title}
        author={book.author}
        img={book.img}
      />
    ));

    return <section className="container-md results">{resultItems}</section>;
  }
}

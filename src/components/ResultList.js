import React, { Component } from "react";
import ResultItem from "../components/ResultItem";
import "../styles/result-list.css";
import STORE from "../dummy-store";

export default class ResultList extends Component {
  render() {
    const resultItems = STORE.map((book) => (
      <ResultItem
        description={book.description}
        title={book.title}
        author={book.author}
        img={book.img}
      />
    ));

    return <section class="container-md results">{resultItems}</section>;
  }
}

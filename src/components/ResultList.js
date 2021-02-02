import React, { Component } from "react";
import ResultItem from "../components/ResultItem";
import "../styles/result-list.css";

export default class ResultList extends Component {
  render() {
    return (
      <section class="container-md results">
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </section>
    );
  }
}

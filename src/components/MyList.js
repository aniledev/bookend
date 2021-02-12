import React, { Component } from "react";
import MyListItem from "./MyListItem";
import "../styles/result-list.css";
import context from "../context.js";

export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.state({
      books: [],
    });
  }

  static contextType = context;

  render() {
    const { books = [] } = this.context;

    console.log(books);

    const listItems = books.map((book) => (
      <MyListItem
        description={book.description}
        title={book.title}
        author={book.author}
        img={book.img}
        key={book.id}
      />
    ));

    return <section className="container-md results">{listItems}</section>;
  }
}

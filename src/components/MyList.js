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

  componentDidMount() {
    // fetch the users list based on hard coded data

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/users/1/books", requestOptions)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          userList: result["books"],
        })
      )
      .catch((error) => console.log("error", error));

    // use set state to update the state, push into array or use spread operator if necessary
    // map over this.state.books
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

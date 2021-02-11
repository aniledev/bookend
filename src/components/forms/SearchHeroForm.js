import React, { Component } from "react";
import FormValidationError from "../FormValidationError";
import config from "../../config";

export default class SearchHeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: "",
        changed: false,
      },
      books: [],
    };
  }

  // method to validate the state
  validateSearch() {
    const search = this.state.search.value.trim();
    // if they don't input a search value at all
    if (!search) {
      return "A search value is required.";
    }
    // if the search length is not appropriate
    if (search.length < 3) {
      return "Book title must be at least 3 characters.";
    }
  }

  //method to update the state
  updateSearch(search) {
    this.setState({
      search: { value: search, changed: true },
    });
  }

  // method for submitting form inputs to the server
  handleSubmit(event) {
    // code to be executed here
    event.preventDefault();
    const { value } = this.state.search;
    // const titleSearch = search.split(" ").join(",");
    console.log(value);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(`Form was submitted. Yay!`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const params = {
      title: value,
    };

    function formatQueryParams(params) {
      const queryItems = Object.keys(params).map(
        (key) => `${key}=${params[key]}`
      );
      // use .join() to combine the query items into a single string
      return queryItems.join("&");
    }

    const queryString = formatQueryParams(params);
    const baseURL = `${config.PORT_URL}/api/results/`;
    const url = baseURL + "?" + queryString;

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(([data]) => {
        this.setState({ books: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const searchInputError = this.validateSearch();

    return (
      <div className="form container-md search-form">
        <form className="search" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group-search">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              className="form-control"
              type="text"
              id="search"
              placeholder="Enter a book title to get recommendations"
              min="3"
              required
              defaultValue=""
              onChange={(e) => this.updateSearch(e.target.value)}
            />
          </div>
          {this.state.search.changed && (
            <FormValidationError message={searchInputError} />
          )}
        </form>
      </div>
    );
  }
}

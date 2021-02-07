import React, { Component } from "react";
import FormValidationError from "../FormValidationError";

export default class SearchHeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: "",
        changed: false,
      },
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
    console.log(`Form was submitted. Yay!`);
  }

  render() {
    const searchInputError = this.validateSearch();

    return (
      <div className="form container-md search-form">
        <form className="search" action="/results">
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

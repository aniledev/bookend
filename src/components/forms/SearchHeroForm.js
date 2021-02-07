import React, { Component } from "react";

export default class SearchHeroForm extends Component {
  // method to validate the state
updateSearch(){}

  //method to update the state
  render() {
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
              value="red at the bone"
              required
              onChange={(e) => this.updateSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

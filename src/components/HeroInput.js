import React, { Component } from "react";

export default class HeroInput extends Component {
  render() {
    return (
      <div className="form container-md search-form">
        <form className="search" action="/results.html">
          <div className="form-group-search">
            <label for="search" className="sr-only">
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
            />
          </div>
        </form>
      </div>
    );
  }
}

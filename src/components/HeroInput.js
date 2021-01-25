import React, { Component } from "react";

export default class HeroInput extends Component {
  render() {
    return (
      <div class="form container-md search-form">
        <form class="search" action="/results.html">
          <div class="form-group-search">
            <label for="search" class="sr-only">
              Search
            </label>
            <input
              class="form-control"
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

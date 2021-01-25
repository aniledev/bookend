import React, { Component } from "react";
import NavBarMini from "../components/NavBarMini";
import Footer from "../components/Footer";

export default class Search extends Component {
  render() {
    return (
      <div className="Search-Page">
        <NavBarMini />
        Search
        <Footer />
      </div>
    );
  }
}

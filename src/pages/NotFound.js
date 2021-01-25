import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound-Page">
        <NavBar />
        NotFound
        <Footer />
      </div>
    );
  }
}

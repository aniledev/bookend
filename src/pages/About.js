import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class About extends Component {
  render() {
    return (
      <div className="About-Page">
        <NavBar />
        About
        <Footer />
      </div>
    );
  }
}

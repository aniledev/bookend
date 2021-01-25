import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";

export default class Features extends Component {
  render() {
    return (
      <div className="Features-Page">
        <NavBar />
        Features
        <Footer />
      </div>
    );
  }
}

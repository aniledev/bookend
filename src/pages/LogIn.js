import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";

export default class LogIn extends Component {
  render() {
    return (
      <div className="LogIn-Page">
        <NavBar />
        LogIn
        <Footer />
      </div>
    );
  }
}

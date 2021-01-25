import React, { Component } from "react";
import NavBarMini from "../components/NavBarMini";
import Footer from "../components/Footer";

export default class Results extends Component {
  render() {
    return (
      <div className="Results-Page">
        <NavBarMini />
        Results
        <Footer />
      </div>
    );
  }
}

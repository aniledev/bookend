import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile-Page">
        <NavBarMini />
        Profile
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        NavBar
        <NavBarLeft />
        <NavBarRight />
      </div>
    );
  }
}

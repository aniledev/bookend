import React, { Component } from "react";
import NavBarLeft from "./NavBarLeft";
import NavBarRightMini from "./NavBarRightMini";

export default class NavBarMini extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavBarLeft />
          <NavBarRightMini />
        </div>
      </nav>
    );
  }
}

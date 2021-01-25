import React, { Component } from "./node_modules/react";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";
import "./node_modules/bootstrap/dist/css/bootstrap.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavBarLeft />
          <NavBarRight />
        </div>
      </nav>
    );
  }
}

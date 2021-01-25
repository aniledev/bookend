import React, { Component } from "react";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";

export default class HeroButtons extends Component {
  render() {
    return (
      <div className="hero-buttons container-md d-flex justify-content-center pt-2 my-4">
        <SignUpButton />
        <LogInButton />
      </div>
    );
  }
}

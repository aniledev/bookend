import React, { Component } from "react";
import SignUp from "../pages/SignUp";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";

export default class HeroButtons extends Component {
  render() {
    return (
      <div className="HeroButtons">
        HeroButtons
        <SignUpButton />
        <LogInButton />
      </div>
    );
  }
}

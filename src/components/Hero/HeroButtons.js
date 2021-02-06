import React, { Component } from "react";
import HeroSignUpButton from "../buttons/HeroSignUpButton";
import HeroLogInButton from "../buttons/HeroLogInButton";

export default class HeroButtons extends Component {
  render() {
    return (
      <div className="hero-buttons container-md d-flex justify-content-center pt-2 my-4">
        <HeroSignUpButton />
        <HeroLogInButton />
      </div>
    );
  }
}

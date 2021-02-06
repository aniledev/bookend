import React, { Component } from "react";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButtons from "./HeroButtons";

export default class HomeHero extends Component {
  render() {
    return (
      <>
        <HeroTitle />
        <HeroSubtitle />
        <HeroButtons />
      </>
    );
  }
}

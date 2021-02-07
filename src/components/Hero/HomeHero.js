import React, { Component } from "react";
import HeroTitle from "./HeroTitle";
import HomeHeroSubtitle from "./HomeHeroSubtitle";
import HeroButtons from "./HeroButtons";

export default class HomeHero extends Component {
  render() {
    return (
      <>
        <HeroTitle />
        <HomeHeroSubtitle />
        <HeroButtons />
      </>
    );
  }
}

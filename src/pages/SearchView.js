import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";
import SearchHeroSubtitle from "../components/hero/SearchHeroSubtitle";
import HeroInput from "../components/hero/HeroInput";
import HeroTitle from "../components/hero/HeroTitle";
import SearchImage from "../components/SearchImage";

export default class Search extends Component {
  render() {
    return (
      <div className="Search-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroTitle />
            <SearchHeroSubtitle />
            <HeroInput />
            <SearchImage />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

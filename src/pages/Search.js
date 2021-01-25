import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";
import HeroSubtitleMini from "../components/hero/HeroSubtitleMini";
import HeroInput from "../components/hero/HeroInput";
import HeroTitle from "../components/hero/HeroTitle";

export default class Search extends Component {
  render() {
    return (
      <div className="Search-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroTitle />
            <HeroSubtitleMini />
            <HeroInput />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

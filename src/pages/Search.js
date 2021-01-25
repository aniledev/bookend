import React, { Component } from "react";
import NavBarMini from "../components/NavBar/NavBarMini";
import Footer from "../components/Footer";
import HeroSubtitleMini from "../components/Hero/HeroSubtitleMini";
import HeroInput from "../components/Hero/HeroInput";
import HeroTitle from "../components/Hero/HeroTitle";

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

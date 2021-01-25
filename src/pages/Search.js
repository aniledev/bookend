import React, { Component } from "react";
import NavBarMini from "../components/NavBar/NavBarMini";
import Footer from "../components/Footer";
import HeroMiniSearch from "../components/HeroMiniSearch";
import HeroInput from "../components/HeroInput";

export default class Search extends Component {
  render() {
    return (
      <div className="Search-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroMiniSearch />
            <HeroInput />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

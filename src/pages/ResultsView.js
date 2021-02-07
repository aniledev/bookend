import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";
import HeroTitle from "../components/hero/HeroTitle";
import SearchHeroForm from "../components/hero/SearchHeroForm";
import ResultsList from "../components/ResultsList";

export default class Results extends Component {
  render() {
    return (
      <div className="Results-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroTitle />
            <SearchHeroForm />
          </section>
          <ResultsList />
        </main>
        <Footer />
      </div>
    );
  }
}

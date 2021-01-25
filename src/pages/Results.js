import React, { Component } from "react";
import NavBarMini from "../components/NavBarMini";
import Footer from "../components/Footer";
import HeroMiniResults from "../components/HeroMiniResults";
import HeroInput from "../components/HeroInput";

export default class Results extends Component {
  render() {
    return (
      <div className="Results-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroMiniResults />
            <HeroInput />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

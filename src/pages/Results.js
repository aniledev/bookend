import React, { Component } from "react";
import NavBarMini from "../components/NavBar/NavBarMini";
import Footer from "../components/Footer";
import HeroTitle from "../components/Hero/HeroTitle";
import HeroInput from "../components/Hero/HeroInput";

export default class Results extends Component {
  render() {
    return (
      <div className="Results-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroTitle />
            <HeroInput />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

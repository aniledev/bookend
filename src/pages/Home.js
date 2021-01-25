import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MainImage from "../components/MainImage";
import InfoCollage from "../components/InfoCollage";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="Home-Page">
        <NavBar />
        <main className="main">
          <section className="hero pt-5">
            <Hero />
            <MainImage />
          </section>
          <InfoCollage />
        </main>

        <Footer />
      </div>
    );
  }
}

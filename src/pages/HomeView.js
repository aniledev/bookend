import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/hero/Hero";
import HomeMainImage from "../components/HomeMainImage";
import HomeInfoCollage from "../components/HomeInfoCollage";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="Home-Page">
        <NavBar />
        <main className="main">
          <section className="hero pt-5">
            <Hero />
            <HomeMainImage />
          </section>
          <HomeInfoCollage />
        </main>

        <Footer />
      </div>
    );
  }
}

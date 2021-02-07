import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import HomeHero from "../components/hero/HomeHero";
import HomeMainImage from "../components/home/HomeMainImage";
import HomeInfoCollage from "../components/home/HomeInfoCollage";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="Home-Page">
        <NavBar />
        <main className="main">
          <section className="hero pt-5">
            <HomeHero />
            <HomeMainImage />
          </section>
          <HomeInfoCollage />
        </main>

        <Footer />
      </div>
    );
  }
}

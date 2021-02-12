import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";
import HeroTitle from "../components/hero/HeroTitle";
import SearchHeroForm from "../components/forms/SearchHeroForm";
import MyList from "../components/MyList";

export default class MyListView extends Component {
  render() {
    return (
      <div className="Results-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroTitle />
            <SearchHeroForm />
          </section>
          <MyList />
        </main>
        <Footer />
      </div>
    );
  }
}

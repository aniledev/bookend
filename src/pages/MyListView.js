import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";
import MyListHeroTitle from "../components/hero/MyListHeroTitle";
import SearchHeroForm from "../components/forms/SearchHeroForm";
import MyList from "../components/MyList";

export default class MyListView extends Component {
  render() {
    return (
      <div className="Results-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <MyListHeroTitle />
          </section>
          <MyList />
        </main>
        <Footer />
      </div>
    );
  }
}

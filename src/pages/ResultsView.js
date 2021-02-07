import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";
import HeroTitle from "../components/hero/HeroTitle";
import SearchHeroForm from "../components/forms/SearchHeroForm";
import ResultsList from "../components/ResultsList";
import PropTypes from "prop-types";

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

Results.propTypes = {
  // define prop types here
  books: PropTypes.array,
};

// Results.defaultProps = {
//   books: [],
// };

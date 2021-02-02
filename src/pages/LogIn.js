import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";
import LogInTitle from "../components/LogInTitle";
import LogInButtonSmall from "../components/buttons/LogInButtonSmall";
import LogInForm from "../components/LogInForm";

export default class LogIn extends Component {
  render() {
    return (
      <div className="LogIn-Page">
        <NavBar />

        <main class="main">
          <section class="log-in-section pt-5">
            <LogInTitle />
            <LogInForm />

            <LogInButtonSmall />
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

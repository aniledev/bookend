import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";
import LogInTitle from "../components/forms/LogInTitle";
import LogInForm from "../components/forms/LogInForm";

export default class LogIn extends Component {
  render() {
    return (
      <div className="LogIn-Page">
        <NavBar />

        <main class="main">
          <section class="log-in-section pt-5">
            <LogInTitle />
            <LogInForm />
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

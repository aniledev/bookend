import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";
import SignUpTitle from "../components/SignUpTitle";
import SignUpForm from "../components/SignUpForm";
import SignUpButtonSmall from "../components/buttons/SignUpButtonSmall";

export default class SignUp extends Component {
  render() {
    return (
      <div className="SignUp-Page">
        <NavBar />
        SignUp
        <main class="main">
          <section class="sign-up-section pt-5">
            <SignUpTitle />
            <SignUpForm />
            <SignUpButtonSmall />

           
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

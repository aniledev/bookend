import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";
import SignUpTitle from "../components/forms/SignUpTitle";
import SignUpForm from "../components/forms/SignUpForm";


export default class SignUp extends Component {
  render() {
    return (
      <div className="SignUp-Page">
        <NavBar />
        <main class="main">
          <section class="sign-up-section pt-5">
            <SignUpTitle />
            <SignUpForm />
           
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";
import LogInTitle from "../components/LogInTitle";
import LogInButtonSmall from "../components/buttons/LogInButtonSmall";

export default class LogIn extends Component {
  render() {
    return (
      <div className="LogIn-Page">
        <NavBar />

        <main class="main">
          <section class="log-in-section pt-5">
            <LogInTitle />

            <div class="form container-md log-in-form">
              <form class="log-in">
                <div class="form-group">
                  <label for="email" class="sr-only">
                    Email
                  </label>
                  <input
                    class="form-control"
                    pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                    id="email"
                    placeholder="Email"
                    min="1"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="sr-only">
                    Password
                  </label>
                  <input
                    class="form-control"
                    type="password"
                    id="password"
                    placeholder="Password"
                    min="8"
                    max="16"
                    required
                  />
                </div>
              </form>
            </div>
            <LogInButtonSmall />
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

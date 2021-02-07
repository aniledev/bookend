import React, { Component } from "react";
import "../../styles/log-in-form.css";

export default class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        changed: false,
      },
      password: {
        value: "",
        changed: false,
      },
    };
  }

  // methods for validating the inputs on submission of the form

  validateEmail() {
    const email = this.state.email.value.trim();
    // if email is not entered
    if (!email) {
      return "Please enter your email address.";
    }
  }
  validatePassword() {
    const password = this.state.password.value.trim();
    // if password is not entered
    if (!password) {
      return "Please enter your password.";
    }
  }

  // methods for updating the state based on form inputs
  updateEmail(email) {
    this.setState({
      email: { value: email, changed: true },
    });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, changed: true },
    });
  }

  render() {
    return (
      <>
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
                min="8"
                max="100"
                required
                onChange={(e) => this.updateEmail(e.target.value)}
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
                required
                onChange={(e) => this.updatePassword(e.target.value)}
              />
            </div>
            <div className="sign-up-button container-md text-center py-3">
              {/* <Link class="btn btn-primary" to="/search">
           Log In
         </Link> */}
              <button type="submit" class="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

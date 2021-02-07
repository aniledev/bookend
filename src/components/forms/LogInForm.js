import React, { Component } from "react";
import "../../styles/log-in-form.css";
import FormValidationError from "../FormValidationError";

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

  // method for submitting form inputs to the server and comparing them to the database
  handleSubmit(event) {
    // code to be executed here
    event.preventDefault();
    console.log(`Form was submited. Yay!`);
  }

  render() {
    const emailInputError = this.validateEmail();
    const passwordInputError = this.validatePassword();

    return (
      <>
        <div className="form container-md log-in-form">
          <form className="log-in">
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                className="form-control"
                id="email"
                placeholder="Email"
                min="8"
                max="100"
                required
                onChange={(e) => this.updateEmail(e.target.value)}
              />
            </div>
            {this.state.email.changed && (
              <FormValidationError message={emailInputError} />
            )}
            <div className="form-group">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Password"
                min="8"
                required
                onChange={(e) => this.updatePassword(e.target.value)}
              />
            </div>
            {this.state.password.changed && (
              <FormValidationError message={passwordInputError} />
            )}
            <div className="sign-up-button container-md text-center py-3">
              {/* <Link className="btn btn-primary" to="/search">
           Log In
         </Link> */}
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

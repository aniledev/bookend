import React, { Component } from "react";
import "../../styles/sign-up-form.css";
import FormValidationError from "../FormValidationError";
import { Link } from "react-router-dom";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        changed: false,
      },
      email: {
        value: "",
        changed: false,
      },
      password: {
        value: "",
        changed: false,
      },
      retypePassword: {
        value: "",
        changed: false,
      },
    };
  }

  // methods for validating form inputs
  validateName() {
    const name = this.state.name.value.trim();
    // if user did not input a name
    if (name.length === 0) {
      return "Your name is required.";
    } // if name is less than 3 characters or greater than 50 characters
    else if (name.length < 3 || name.length > 50) {
      return "Name must be between 3 and 50 characters.";
    }
  }
  validateEmail() {
    const email = this.state.email.value.trim();
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    // if user did not input an email
    if (!email) {
      return "An email is required.";
    }
    // if the email does not match a specific pattern
    if (!email.match(regex)) {
      return "You must enter a valid email address.";
    }
    // if the email is less than 5 characters and greater than 100 characters
  }
  validatePassword() {
    const password = this.state.password.value.trim();
    // if the user did not input a password
    // if the password is less than 8 characters and more than 20 characters
    // if the password does not contain a number
    // if the password does not contain a special character
  }
  validateRetypePassword() {
    const password = this.state.password.value.trim();
    const retypePassword = this.state.retypePassword.value.trim();
    // if the user did not input a retype password
    // if the retype password and password do not match each other
  }

  // methods to to update the state
  updateName(name) {
    this.setState({
      name: { value: name, changed: true },
    });
  }

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

  updateRetypePassword(retypePassword) {
    this.setState({
      retypePassword: { value: retypePassword, changed: true },
    });
  }

  // method for submitting form inputs to the server
  handleSubmit(event) {
    // code too be executed here
    event.preventDefault();
    console.log(`Form was submitted. Yay!`);
  }

  render() {
    const nameInputError = this.validateName();
    const emailInputError = this.validateEmail();
    const passwordInputError = this.validatePassword();
    const retypePasswordInputError = this.validateRetypePassword();

    return (
      <>
        <div className="form container-md sign-up-form">
          <form class="sign-up" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name" class="sr-only">
                Name
              </label>
              <input
                class="form-control"
                type="text"
                id="name"
                placeholder="Name"
                min="3"
                max="50"
                required
                onChange={(e) => this.updateName(e.target.value)}
              />
            </div>
            {this.state.name.changed && (
              <FormValidationError message={nameInputError} />
            )}
            <div className="form-group">
              <label htmlFor="email" class="sr-only">
                Email
              </label>
              <input
                class="form-control"
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                id="email"
                placeholder="Email"
                min="5"
                max="100"
                required
                onChange={(e) => this.updateEmail(e.target.value)}
              />
            </div>
            {this.state.email.changed && (
              <FormValidationError message={emailInputError} />
            )}
            <div className="form-group">
              <label htmlFor="password" class="sr-only">
                Password
              </label>
              <input
                class="form-control"
                type="password"
                id="password"
                placeholder="Password"
                min="8"
                max="20"
                required
                onChange={(e) => this.updatePassword(e.target.value)}
              />
            </div>
            {this.state.password.changed && (
              <FormValidationError message={passwordInputError} />
            )}
            <div className="form-group">
              <label htmlFor="retype-password" class="sr-only">
                Retype password
              </label>
              <input
                type="password"
                class="form-control"
                id="retype-password"
                placeholder="Retype password"
                min="8"
                max="16"
                required
                onChange={(e) => this.updateRetypePassword(e.target.value)}
              />
            </div>
            {this.state.retypePassword.changed && (
              <FormValidationError message={retypePasswordInputError} />
            )}
          </form>
        </div>
        <div className="sign-up-button container-md text-center py-3">
          {/* <Link class="btn btn-primary" to="/search">
            Sign Up
          </Link> */}
          <button
            type="submit"
            class="btn btn-primary"
            disabled={this.validateName()}
          >
            Sign Up
          </button>
        </div>
      </>
    );
  }
}

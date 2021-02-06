import React, { Component } from "react";
import "../../styles/sign-up-form.css";

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
    return (
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
              min="1"
              max="50"
              required
              onChange={(e) => this.updateName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" class="sr-only">
              Email
            </label>
            <input
              class="form-control"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              id="email"
              placeholder="Email"
              min="1"
              required
              onChange={(e) => this.updateEmail(e.target.value)}
            />
          </div>
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
              max="16"
              required
              onChange={(e) => this.updatePassword(e.target.value)}
            />
          </div>
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
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../../styles/sign-up-form.css";

export default class SignUpForm extends Component {
  render() {
    return (
      <div className="form container-md sign-up-form">
        <form class="sign-up">
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
            />
          </div>
        </form>
      </div>
    );
  }
}

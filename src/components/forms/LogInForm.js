import React, { Component } from "react";
import "../../styles/log-in-form.css";

export default class LogInForm extends Component {
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

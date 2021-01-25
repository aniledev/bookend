import "../styles/App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home.js";
import SignUp from "../pages/SignUp.js";
import LogIn from "../pages/LogIn.js";
import Search from "../pages/Search.js";
import Results from "../pages/Results.js";
import Features from "../pages/Features.js";
import About from "../pages/About";
import Contact from "../pages/Contact.js";
import Profile from "../pages/Profile.js";
import NotFound from "../pages/NotFound.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

import "../styles/App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../pages/HomeView.js";
import SignUpView from "../pages/SignUpView.js";
import LogInView from "../pages/LogInView.js";
import SearchView from "../pages/SearchView.js";
import ResultsView from "../pages/ResultsView.js";
import FeaturesView from "../pages/FeaturesView.js";
import AboutView from "../pages/AboutView.js";
import ContactView from "../pages/ContactView.js";
import MyListView from "../pages/MyListView.js";
import ProfileView from "../pages/ProfileView.js";
import NotFoundView from "../pages/NotFoundView.js";
import STORE from "../dummy-store";
import context from "../context.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: STORE,
    };
  }

  componentDidMount() {
    // this is the code to fetch the books from the server/database and then use set state to update the state with the real books and not the dummy data
  }

  render() {
    console.log(this.state.books);

    const value = {
      books: this.state.books,
    };

    return (
      <context.Provider value={value}>
        <div className="App">
          <Switch>
            <Route exact path="/sign-up" component={SignUpView} />
            <Route exact path="/log-in" component={LogInView} />
            <Route exact path="/search" component={SearchView} />
            <Route exact path="/results" component={ResultsView} />
            <Route exact path="/features" component={FeaturesView} />
            <Route exact path="/about" component={AboutView} />
            <Route exact path="/contact" component={ContactView} />
            <Route exact path="/my-list" component={MyListView} />
            <Route exact path="/profile" component={ProfileView} />
            <Route exact path="/" component={HomeView} />
            <Route component={NotFoundView} />
          </Switch>
        </div>
      </context.Provider>
    );
  }
}

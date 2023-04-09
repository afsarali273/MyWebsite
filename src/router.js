import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home/Home";
import Details from "./Details/Details";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Resume from "./Resume/Resume";

export default class AppRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            {/* home */}
            <Route exact path="/" render={(props) => <Home />} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/about-me" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

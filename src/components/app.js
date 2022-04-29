import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetails from "./portfolio/portfolio-details";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />
            <div className="heading">
              <div className="bio-subheading">
                <h2>Junior Full Stack Developer</h2>
                {/* <div className="bio-image">
                  <img src="/assets/images/developer-photo.jpg" alt="profile-photo" width="400"/>
                </div> */}
              </div>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/about-me" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetails} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

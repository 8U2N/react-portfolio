import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioContainer from './portfolio/portofolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
//  , { BioTextNode }

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-me" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>
        <div>
          <img src="/assets/images/developer-photo.jpg" alt="profile-photo" width="400"></img>
        </div>
        <div class="heading">
          <h1>&#9876; Tyler Burnworth &#9876;</h1>
          <h2>Junior Full Stack Developer</h2>
          <h3>&#128368; {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
        </div>
        <PortfolioContainer />
        {/* <BioTextNode /> */}
      </div>
    );
  }
}

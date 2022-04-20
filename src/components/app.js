import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <img src="/assets/images/developer-photo.jpg" alt="profile-photo" width="400"></img>
        </div>
        <h1>&#9876; Tyler Burnworth &#9876;</h1>
        <h2>Junior Full Stack Developer</h2>
        <div>
          <h3>&#128368; {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
        </div>
      </div>
    );
  }
}

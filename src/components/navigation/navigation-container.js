import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div className="nav-wrapper">
                <div className="navbar">
                    <div className="nav-link">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink exact to="/about-me">
                            About Me
                        </NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink exact to="/contact">
                            Contact
                        </NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink exact to="/Blog">
                            Blog
                        </NavLink>
                        {false ? <button>Add Blog</button> : null}
                    </div>
                </div>
                <div className="name">
                    &#9876; Tyler Burnworth
                </div>
            </div>
        );
    }
}

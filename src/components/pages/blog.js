import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Blog extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div>
            <div>
        <h2>Blog</h2>
            </div>
            <div>
                <Link to="/about-me">Read More About Myself</Link>
            </div>
        </div>
        );
    }
}

export default Blog
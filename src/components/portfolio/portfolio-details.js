import React, { Component } from 'react';

export default class PortfolioDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>A closer look at {this.props.match.params.slug}</h2>
            </div>
        );
    }
}
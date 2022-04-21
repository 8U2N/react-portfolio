import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

    }

    portfolioItems() {
        const data = ["Python BlackJack Game", "Javascript Choices Game", "Author Website", "DevFries Website"];

        return data.map(item => {
            return <h2>{item}</h2>;
        });
    }
    render() {
        return (
            <div>
                <h2>Projects</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}
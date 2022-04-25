import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
// import BioTextNodes from "./bio-text-node";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Projects",
            isloading: true,
            data: [
                { title: "Python BlackJack Game", category: "Games" },
                { title: "Javascript Choices Game", category: "Games" },
                { title: "Author Website", category: "Websites" },
                { title: "DevFries Website", category: "Websites" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem item={item.title} url={"github.com"} />;
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('Games')}>Games</button>
                <button onClick={() => this.handleFilter('Websites')}>Websites</button>

                {this.portfolioItems()}

            </div>
        );
    }
}

// export class BioTextNode extends Component {
//     constructor() {
//         super();

//     }

//     bioTextNodes() {
//         const data = ["Profile", "Experience", "Skills", "Activities"];

//         return data.map(node => {
//             return <BioTextNodes node={node} />;
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Developer Bio</h2>

//                 {this.bioTextNodes()}
//             </div>
//         );
//     }
// }
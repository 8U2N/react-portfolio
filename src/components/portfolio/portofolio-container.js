import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
// import BioTextNodes from "./bio-text-node";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Projects",
            data: [
                { title: "Python BlackJack Game" },
                { title: "Javascript Choices Game" },
                { title: "Author Website" },
                { title: "DevFries Website" }
            ]
        };
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem item={item.title} url={"github.com"} />;
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle.data}</h2>

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
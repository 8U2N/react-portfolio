import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Projects",
            isloading: false,
            data: [
                { title: "Python BlackJack Game", category: "Games", slug: 'my Python Blackjack game' },
                { title: "Javascript Choices Game", category: "Games", slug: 'my Javascript choices game' },
                { title: "Author Website", category: "Websites", slug: 'my responsive author website' },
                { title: "DevFries Website", category: "Websites", slug: 'my responsive Devfries website' }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    getPortfolioItems() {
        axios
          .get("https://tylerburnworth.devcamp.space/portfolio/portfolio_items")
          // handle success
          .then(response => {
            console.log(response);
            this.setState({
                data: response.data.portfolio_items
            });
          })
          // handle error
          .catch(error => {
            console.log("YOU DIDN'T SAY THE MAGIC WORD!!!", error);
          })
      }
    

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        ["id", "name", "description", "thumb_image_url"]

        return this.state.data.map(item => {
            return (
                <PortfolioItem 
                key={item.id} 
                item={item} />
            );
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {

        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        
        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('Websites')}>Websites</button>
                <button className="btn" onClick={() => this.handleFilter('Games')}>Games</button>
                <button className="btn" onClick={() => this.handleFilter('Websites')}>Websites</button>
                {this.portfolioItems()}
            </div>
        );
    }
}


import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Projects",
      isloading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://tylerburnworth.devcamp.space/portfolio/portfolio_items")
      // handle success
      .then((response) => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter((item) => {
              return item.category === filter;
            }),
          });
        } else {
          this.setState({
            data: response.data.portfolio_items,
          });
        }
      })
      // handle error
      .catch((error) => {
        console.log("YOU DIDN'T SAY THE MAGIC WORD!!!", error);
      });
  }

  portfolioItems() {
    ["id", "name", "description", "thumb_image_url"];

    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
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
      <div className="homepage-wrapper">
        <div className="filter-links">
          <div className="button-board">
            <button
              className="btn"
              onClick={() => this.handleFilter("Websites")}
            >
              Websites
            </button>
            <button className="btn" onClick={() => this.handleFilter("Games")}>
              Games
            </button>
            <button className="btn" onClick={() => this.handleFilter("Books")}>
              Books
            </button>
            <button
              className="btn"
              onClick={() => this.handleFilter("CLEAR_FILTERS")}
            >
              All
            </button>
          </div>
          <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
        </div>
      </div>
    );
  }
}

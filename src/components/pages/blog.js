import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import BlogItem from "../pages/blog/blog-item";
import BlogModal from "../modals/blog-modal";


class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true,
            blogModalIsOpen: false
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll, false);
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.setState({
            blogModalIsOpen: false
        })
    }

    handleNewBlogClick() {
        this.setState({
            blogModalIsOpen: true
        })
    }

    onScroll() {
          if (
            this.state.isLoading ||
            this.state.blogItems.length === this.state.totalCount
          ) {
            return;
          }
    
          if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
          ) {
            this.getBlogItems();
          }
      }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
        axios.get(`https://tylerburnworth.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, { 
            withCredentials: true 
        }).then(response => {
            this.setState({
                blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
                totalCount: response.data.meta.total_records,
                isLoading: false
            })
            console.log(response)
        }).catch(error => {
            console.log("getBlogItems error", error);
        });

    }
    
    componentDidMount() {
        this.getBlogItems()
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />
        })
        return (
        
        <div className="blog-container">
            <BlogModal 
            handleModalClose={this.handleModalClose}
            modalIsOpen={this.state.blogModalIsOpen} />

            <div className="new-blog-link">
                <a onClick={this.handleNewBlogClick}>Offnet Modal!</a>
            </div>
            <div className="content-container">
                <h2>Blog</h2>
                <div>{blogRecords}</div>
            </div>
            {this.state.isLoading ? (
            <div className="content-loader">
                <FontAwesomeIcon icon={faSpinner} spin />
            </div>
            ) : null }
        </div>
        );
    }
}

export default Blog
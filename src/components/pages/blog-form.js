import axios from 'axios';
import React, { Component } from 'react';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);


        this.state = {
            title: "",
            blog_status: "",
            content: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();
        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);
        // formData.append("portfolio_blog[content]", this.state.content);

        return formData;
    }

    handleSubmit(event) {
        axios.post(
        "https://tylerburnworth.devcamp.space/portfolio/portfolio_blogs", 
        this.buildForm(), 
        { withCredentials: true }
        ).then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
            this.setState({
                title: "",
                blog_status: ""
            })
        }).catch(error => {
            console.log("handleSubmit for blog error", error);
        });
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {
        return (
            <form className="blog-form-wrapper" onSubmit={this.handleSubmit} >
                <div className="blog-title-wrapper">
                <h2>Blog Form</h2>
                </div>
                <div className="text-input-wrapper">
                    <input 
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    placeholder="Blog Name"
                    value={this.state.title} 
                    />

                    <input className="blog-status" 
                    type="text"
                    name="blog_status"
                    onChange={this.handleChange}
                    placeholder="Status"
                    value={this.state.blog_status}
                    />
                </div>
                <div className="button">
                    <button className="btn" type="submit">Save</button>
                </div>
            </form>
        );
    }
}

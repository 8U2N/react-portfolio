import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from "react-dropzone-component";

import RichTextEditor from '../forms/rich-text-editor';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);


        this.state = {
            title: "",
            blog_status: "",
            content: "",
            featured_image: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRteChange = this.handleRteChange.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);

        this.featuredImageRef = React.createRef();

    }

    componentConfig() {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpsbin.org/post"
        }
    }

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    handleFeaturedImageDrop() {
        return {
            addedfile: file => this.setState({ featured_image: file })
        }
    }

    handleRteChange(content) {
        this.setState({ content });
    }

    buildForm() {
        let formData = new FormData();
        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);
        formData.append("portfolio_blog[content]", this.state.content);

        if (this.state.featured_image) {
            formData.append("portfolio_blog[featured_image]", this.state.featured_image);
        }

        return formData;
    }

    handleSubmit(event) {
        axios.post(
        "https://tylerburnworth.devcamp.space/portfolio/portfolio_blogs", 
        this.buildForm(), 
        { withCredentials: true }
        ).then(response => {
            if (this.state.featured_image) {
            this.featuredImageRef.current.dropzone.removeAllFiles();
            }

            this.setState({
                title: "",
                content: "",
                blog_status: "",
                featured_image: ""
            });


            this.props.handleSuccessfulFormSubmission(
                response.data.portfolio_blog
            );
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
            <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
                <div className="blog-title-wrapper">
                <h2>Blog Form</h2>
                </div>
                <div className="text-input-wrapper">
                    <input 
                    type="text"
                    onChange={this.handleChange}
                    name="title"
                    placeholder="Blog Title"
                    value={this.state.title} 
                    />

                    <input className="blog-status" 
                    type="text"
                    onChange={this.handleChange}
                    name="blog_status"
                    placeholder="Status"
                    value={this.state.blog_status}
                    />

                    <div className="one-column">
                        <RichTextEditor 
                            handleRteChange={this.handleRteChange} 
                        />
                    </div>

                    <div className="image-uploaders">
                        <DropzoneComponent 
                            ref={this.featuredImageRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handleFeaturedImageDrop()}
                            >
                            <div className="dz-message">Featured Image</div>
                        </DropzoneComponent>
                    </div>

                </div>
                <div className="button">
                    <button className="btn" type="submit">Save</button>
                </div>
            </form>
        );
    }
}

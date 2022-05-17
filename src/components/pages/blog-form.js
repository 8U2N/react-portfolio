import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";
import handleFeaturedImageDelete from "../pages/blog-detail";

import RichTextEditor from "../forms/rich-text-editor";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      blog_status: "",
      content: "",
      featured_image: "",
      apiUrl: "https://tylerburnworth.devcamp.space/portfolio/portfolio_blogs",
      apiAction: "post",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRteChange = this.handleRteChange.bind(this);

    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.featuredImageRef = React.createRef();
  }

  deleteImage(imageType) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/delete-portfolio-blog-image/${this.props.blog.id}?image_type=${imageType}`,
        { withCredentials: true }
      )
      .then((response) => {
        // TODO
        this.props.handleFeaturedImageDelete();
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  componentWillMount() {
    if (this.props.editMode) {
      this.setState({
        id: this.props.blog.id,
        title: this.props.blog.title,
        blog_status: this.props.blog.blog_status,
        content: this.props.blog.content,
        apiUrl: `https://tylerburnworth.devcamp.space/portfolio/portfolio_blogs/${this.props.blog.id}`,
        apiAction: "patch",
      });
    }
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }

  handleFeaturedImageDrop() {
    return {
      addedfile: (file) => this.setState({ featured_image: file }),
    };
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
      formData.append(
        "portfolio_blog[featured_image]",
        this.state.featured_image
      );
    }

    return formData;
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
      withCredentials: true,
    })
      .then((response) => {
        if (this.state.featured_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles();
        }

        this.setState({
          title: "",
          content: "",
          blog_status: "",
          featured_image: "",
        });

        if (this.props.editMode) {
          //Update bog detail
          this.props.handleUpdateFormSubmission(response.data.portfolio_blog);
        } else {
          this.props.handleSuccessfulFormSubmission(
            response.data.portfolio_blog
          );
        }
      })
      .catch((error) => {
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

          <input
            className="blog-status"
            type="text"
            onChange={this.handleChange}
            name="blog_status"
            placeholder="Status"
            value={this.state.blog_status}
          />

          <div className="one-column">
            <RichTextEditor
              handleRteChange={this.handleRteChange}
              editMode={this.props.editMode}
              contentToEdit={
                this.props.editMode && this.props.blog.content
                  ? this.props.blog.content
                  : null
              }
            />
          </div>

          <div className="image-uploaders">
            {this.props.editMode && this.props.blog.featured_image_url ? (
              <div className="portfolio-manager-image-wrapper">
                <img src={this.state.featured_image_url} />

                <div className="image-removal-link">
                  <a onClick={() => this.deleteImage("featured_image")}>
                    Remove File
                  </a>
                </div>
              </div>
            ) : (
              <DropzoneComponent
                ref={this.featuredImageRef}
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleFeaturedImageDrop()}
              >
                <div className="dz-message">Featured Image</div>
              </DropzoneComponent>
            )}
          </div>
        </div>
        <div className="button">
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}

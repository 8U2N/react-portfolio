import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faLock,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.email,
            password: this.state.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth();
        } else {
          this.setState({
            errorText: "Email or Password INcorrect...",
          });
          this.props.handleUnSuccessfulAuth();
        }
      })
      .catch((error) => {
        console.log("Login Error", error);
        this.setState({
          errorText: "Login BAD. So, so bad...",
        });
        this.props.handleUnSuccessfulAuth();
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS DASHBOARD</h1>
        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelopeSquare} />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
            Login
          </button>
        </form>
      </div>
    );
  }
}

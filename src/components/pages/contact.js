import React from "react";
import contactPagePicture from "../../../static/assets/images/author-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faSquareEnvelope,
  faPhoneSquare,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={faPhoneSquare} />
              419 707-4439
            </div>
          </div>

          <div className="bullet-point-group">
            <a href="mailto: 8u2n@protonmail.com" target="_blank">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
                Email
              </div>
            </a>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              Las Vegas, NV
            </div>
          </div>

          <div className="bullet-point-group">
            <a
              href="https://www.facebook.com/tyler.burnworth.39"
              target="_blank"
            >
              <div className="icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
                Facebook
              </div>
            </a>
          </div>

          <div className="bullet-point-group">
            <a href="https://twitter.com/tylerwriting" target="_blank">
              <div className="icon">
                <FontAwesomeIcon icon={faTwitterSquare} />
                Twitter
              </div>
            </a>
          </div>

          <div className="bullet-point-group">
            <a
              href="https://www.linkedin.com/in/tyler-e-c-burnworth-142504100/"
              target="_blank"
            >
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <div className="text">419 707-4439</div>
            <div className="icon">
              <FontAwesomeIcon icon={faPhoneSquare} />
            </div>
          </div>
        </div>
        <div className="text">Email</div>
        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </div>
        </div>
        <div className="text">Las Vegas, NV</div>
        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </div>
          <div className="text"></div>
        </div>
        <div className="text"></div>
        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>
          <div className="text">Las Vegas, NV</div>
        </div>
        <div className="text"></div>
        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </div>
          <div className="text"></div>
        </div>
        <div className="text"></div>
        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="text"></div>
        </div>
      </div>
    </div>
  );
}

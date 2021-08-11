import React from "react";
// import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faInstagram,
  faEtsy,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./styles/Subscribe.css";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <img id="logo" src="/images/logo_colour.png" alt="" />
      <div className="container">
        <h1>Thank you! 🙌</h1>
        <p>You have successfully subscribed to our mailing list ✅</p>
        <p className="twentyfivestore">
          <a href="/">TwentyFiveStore</a>
        </p>
        <div className="social-media">
          <a
            href="https://www.etsy.com/uk/shop/TwentyFiveStoreArt"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEtsy} />
          </a>
          <a
            href="https://www.instagram.com/twentyfivestoreart/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.pinterest.de/TwentyFiveStore"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="mailto:contact@twentyfivestore.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      <p className="policy">
        <a href="https://www.aweber.com/antispam.htm">No Spam Policy</a> &amp;{" "}
        <a href="https://www.aweber.com/permission.htm">Privacy Policy</a>
      </p>
      <p className="footer-twentyfivestore">
        TwentyFiveStore &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Subscribe;

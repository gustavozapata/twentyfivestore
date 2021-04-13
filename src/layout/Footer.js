import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faInstagram,
  faEtsy,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="content-footer">
        <a href="mailto:contact@twentyfivestore.com">
          contact@twentyfivestore.com
        </a>
        <div className="footer-footer">
          <div className="social-media">
            <a
              href="https://www.etsy.com/uk/shop/TwentyFiveStoreArt"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEtsy} color="#b8c2ce" />
            </a>
            <a
              href="https://www.instagram.com/twentyfivestoreart/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} color="#b8c2ce" />
            </a>
            <a
              href="https://www.pinterest.de/TwentyFiveStore"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faPinterest} color="#b8c2ce" />
            </a>
          </div>
          <p>TwentyFiveStore &copy; {new Date().getFullYear()}</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

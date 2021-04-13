import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="About">
      <div className="content">
        <h2 className="subtitle">Our Products</h2>
        <div className="images">
          <img src="/images/salon.jpeg" alt="House art" />
          <img src="/images/matas.jpeg" alt="Plants art" />
        </div>
        <p>
          Our wide range of wall art prints is created with great passion and
          enthusiasm so that you can select those that will best allow you to
          express your imagination and build spaces around you full of
          unforgettable memories.
        </p>
      </div>
    </div>
  );
};

export default About;

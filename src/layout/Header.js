import React from "react";
import Navigation from "./Navigation";
import "./styles/Header.css";

function Header() {
  return (
    <div className="Header">
      {/* <div className="title-logo">
        <h1>TwentyFiveStore</h1>
        <img src="/images/brush.png" alt="TwentyFive Store logo" />
      </div> */}
      <Navigation />
      {/* <div className="logo"> */}
      {/* <img src="/images/logo.png" alt="TwentyFiveStore logo" /> */}
      {/* </div> */}
    </div>
  );
}

export default Header;

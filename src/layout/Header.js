import React from "react";
import Navigation from "./Navigation";
import "./styles/Header.css";

function Header() {
  return (
    <div className="Header">
      <img
        className="logo-img"
        src="/images/logo_small_nobg.png"
        alt="TwentyFive Store logo"
      />
      <Navigation />
      <div className="shop-img">
        <a
          href="https://www.etsy.com/uk/shop/TwentyFiveStoreArt"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/shop.svg" alt="Shop icon" />
        </a>
        {/* <p>Shop</p> */}
      </div>
    </div>
  );
}

export default Header;

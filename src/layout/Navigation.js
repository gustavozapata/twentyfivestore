import React from "react";
import "./styles/Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <ul>
          {/* <li className="active">Home</li>
          <li>Products</li>
          <li>Team</li> */}
          <li className="li-shop">
            <a
              href="https://www.etsy.com/uk/shop/TwentyFiveStoreArt"
              target="_blank"
              rel="noreferrer"
            >
              Shop
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

import React from "react";
import "./styles/Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <ul>
          <li className="active">twentyfivestore.com</li>
          {/* <li>Products</li>
          <li>Team</li>
          <li>Contact</li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

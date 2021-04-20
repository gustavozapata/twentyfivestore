import React from "react";
import "./styles/Products.css";

const Products = () => {
  return (
    <div className="Products">
      <img
        className="empower-img"
        src="/images/elephant.png"
        alt="Empower illustration"
      />
      <div className="texts">
        <h3>Empower Your Imagination</h3>
        <div className="twenty-five">
          <p>TwentyFiveStore</p>
          <img src="/images/brush.png" alt="Brush" />
        </div>
      </div>
      {/* <img src="/images/empower.png" alt="Empower illustration" /> */}
    </div>
  );
};

export default Products;

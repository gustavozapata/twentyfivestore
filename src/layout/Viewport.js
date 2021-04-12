import React from "react";
import Header from "./Header";
import "./styles/Viewport.css";

function Viewport() {
  return (
    <div className="Viewport">
      <Header />
      <div className="title">
        <h1>TwentyFiveStore</h1>
        <img src="/images/brush.png" alt="TwentyFive Store logo" />
        {/* <div className="line-one"></div>
        <div className="line-two"></div> */}
      </div>
      <div className="title-description">
        <div className="description">
          <h2>
            Helping people create spaces with{" "}
            <span className="personality">personality</span>
            <span className="dot">.</span>
          </h2>
          <p>
            Hundreds of satisfied customers have found in our art that extra
            touch they were looking for in their homes!
          </p>
        </div>
        <div className="cuadro">
          <img src="/images/cuadro.png" alt="Framed print" />
        </div>
      </div>
    </div>
  );
}

export default Viewport;

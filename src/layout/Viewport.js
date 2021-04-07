import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./styles/Viewport.css";

function Viewport() {
  return (
    <div className="Viewport">
      <Header />
      <div className="title">
        <h1>TwentyFiveStore</h1>
        <div className="line-one"></div>
        <div className="line-two"></div>
      </div>
      <div className="title-description">
        <img src="/images/london.jpg" alt="London pictures" />
        {/* <p>
          Donec sed sapien congue, pharetra turpis sed, luctus sapien. Donec
          quis dictum nisl. Morbi aliquam tortor laoreet dui tempor consectetur.
          Praesent varius, sem in feugiat malesuada, libero mauris laoreet ex,
          at rutrum nisi ante at odio.
        </p>
        <p>
          Etiam suscipit nisi magna, et gravida ante auctor ut. Suspendisse
          malesuada urna eget massa sollicitudin interdum.
        </p> */}
      </div>
      <h3>Website coming soon</h3>
      <Footer />
    </div>
  );
}

export default Viewport;

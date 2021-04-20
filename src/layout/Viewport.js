import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import "./styles/Viewport.css";

function Viewport() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://openapi.etsy.com/v2/users/jxunnz7u/feedback/from-buyers?api_key=${process.env.REACT_APP_ETSY_API}`
      )
      .then((res) => {
        setReviews(res.data.results);
        console.log(res);
      });
  }, []);

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
        <div className="cuadro">
          {/* <img src="/images/elephant.png" alt="Framed print" /> */}
          <img src="/images/cuadro.png" alt="Framed print" />
        </div>
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
      </div>
      {/* <div className="reviews">
        {reviews.splice(0, 3).map((review) => (
          <p>"{review.message}"</p>
        ))}
        <span>Our Etsy customers ❤️</span>
      </div> */}
    </div>
  );
}

export default Viewport;

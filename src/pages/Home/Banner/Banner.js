import { Button } from "bootstrap";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="hero-text">
          <h1>
            <span className="d-block mb-2 text-purple">
              Ms.Maggie's Daycare
            </span>
            <span className="d-block mb-2">A warm and loving environment</span>
            <span className="d-block mb-5">For your Child</span>
          </h1>
          <button className="hero-btn">Contact us</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;

import React from "react";
import "./hero.css";
import { HilocationMarker } from "react-icons/hi";
import CountUp from "react-countup/build/CountUp";

export const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        /*left side*/
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCentre search-bar">
            <HilocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search </button>
          </div>

          <div className="flexCentre stats">
            <div className="flexColStart stat">
              <span>
                <CountUp />
              </span>
              <span>Premiun Product</span>
            </div>
          </div>
        </div>
        /*Right side*/
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

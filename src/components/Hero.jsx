import React from "react";
import heroImage1 from "../images/pexels-cliford-mervil-2469122.jpg";
import heroImage2 from "../images/pexels-vasanth-babu-797797.jpg";
import heroImage3 from "../images/pexels-zetong-li-1784578.jpg";

function Hero() {
  return (
    <div className="hero-container">
      <div className="image-grid">
        <img className="hero-image" src={heroImage1} alt="heroImage1"></img>
        <img className="hero-image" src={heroImage2} alt="heroImage2"></img>
        <img className="hero-image" src={heroImage3} alt="heroImage3"></img>
      </div>
      <div className="hero-text-container">
        <p className="hero-text">
          Call me <span>Jake</span>
        </p>
        <p className="hero-subtext">
          I am a reader, learner, creator, and web developer.
        </p>
        <a className="underline" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Hero;

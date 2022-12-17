import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text">Jacob Melancon | Portfolio</div>
      <div className="footer-links">
        <a href="https://github.com/jmelancon5817">
          <FaGithub size={25} />
        </a>
        <a href="https://instagram.com/jake__melancon">
          <FaInstagram size={25} />
        </a>
        <a href="https://twitter.com/melancon_jake">
          <FaTwitter size={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;

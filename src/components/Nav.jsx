import React from "react";
import { useState } from "react";

function Nav() {
  const [menu, SetMenu] = useState(false);
  return (
    <div>
      {menu ? (
        <nav className="nav open">
          <div className="overlay has-fade fade-in"></div>
          <div className="nav-header">
            <h3>Jacob Melancon | Portfolio</h3>
          </div>
          <a
            href="#"
            className="nav-menu"
            id="hamburger"
            onClick={() => {
              SetMenu(!menu);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className="nav-drop has-fade fade-in">
            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <div className="overlay has-fade fade-out"></div>
          <div className="nav-header">
            <h3>Jacob Melancon | Portfolio</h3>
          </div>
          <a
            href="#"
            className="nav-menu"
            id="hamburger"
            onClick={() => {
              SetMenu(!menu);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-drop has-fade fade-out">
            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Nav;

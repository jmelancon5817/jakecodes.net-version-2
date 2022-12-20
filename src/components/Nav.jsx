import React from "react";
import { useState } from "react";

function Nav() {
  const [menu, SetMenu] = useState(false);
  return (
    <div>
      {menu ? (
        <nav id="nav" className="nav open">
          <div className="overlay has-fade fade-in "></div>
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
          <div
            className="nav-drop has-fade fade-in "
            onClick={() => {
              SetMenu(!menu);
            }}
          >
            <a href="#nav">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      ) : (
        <nav id="nav" className="nav">
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
            <a href="#nav">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-drop has-fade fade-out ">
            <a href="#nav">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Nav;

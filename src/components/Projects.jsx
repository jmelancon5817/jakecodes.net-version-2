import React from "react";
import tipCalculator from "../images/tipCalculator.jpg";
import easyBank from "../images/easyBank.jpg";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-item">
        <img
          className="projects-image"
          src={easyBank}
          alt=""
          width="100%"
          height="80%"
        />
        <h3 className="project-title">Easybank landing page</h3>
        <p className="projects-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
        </p>
        <div className="projects-links">
          <a
            href="https://github.com/jmelancon5817/Easybank-landing-page-REACT"
            className="underline"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="projects-item">
        <img
          className="projects-image"
          src={tipCalculator}
          alt=""
          width="100%"
          height="80%"
        />
        <h3 className="project-title">Tip calculator app</h3>
        <p className="projects-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
        </p>
        <div className="projects-links">
          <a
            href="https://github.com/jmelancon5817/Tip-Calculator-App"
            className="underline"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

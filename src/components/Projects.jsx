import React from "react";
import project_1_image from "../images/project1.png";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-item">
        <img
          className="projects-image"
          src={project_1_image}
          alt=""
          width="100%"
          height="80%%"
        />
        <h3 className="project-title">Project 1</h3>
        <p className="projects-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </p>
        <div className="projects-links">
          <a href="" className="underline">
            View Code
          </a>
        </div>
      </div>
      <div className="projects-item">
        <img
          className="projects-image"
          src={project_1_image}
          alt=""
          width="100%"
          height="80%"
        />
        <h3 className="project-title">Project 2</h3>
        <p className="projects-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </p>
        <div className="projects-links">
          <a href="" className="underline">
            View Code
          </a>
        </div>
      </div>
      <div className="projects-item">
        <img
          className="projects-image"
          src={project_1_image}
          alt=""
          width="100%"
          height="80%"
        />
        <h3 className="project-title">Project 3</h3>
        <p className="projects-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </p>
        <div className="projects-links">
          <a href="" className="underline">
            View Code
          </a>
        </div>
      </div>
      <div className="projects-item">
        <img
          className="projects-image"
          src={project_1_image}
          alt=""
          width="100%"
          height="80%"
        />
        <h3 className="project-title">Project 4</h3>
        <p className="projects-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </p>
        <div className="projects-links">
          <a href="" className="underline">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

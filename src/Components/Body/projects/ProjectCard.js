import React from "react";
import "./ProjectCard.css";

export const ProjectCard = ({ project }) => {
  console.log(project.tags);
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.liveLink && (
            <a className="project-link" href={project.liveLink}>
              <div className="link-button">
                <i class="fa-solid fa-globe"></i>Live
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="fa-brands fa-github"></i>GitHub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <span className="tags">{tag} </span>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
};

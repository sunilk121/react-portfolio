import React from "react";
import { Seperator } from "../../common/seperator/Seperator";
import { ProjectData } from "../../social-data/ProjectData";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

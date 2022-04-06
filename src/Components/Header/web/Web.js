import React from "react";
import "../web/Web.css";

export const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fa-solid fa-folder-plus option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fa-solid fa-laptop-code option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fa-solid fa-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contactme">
          <i class="fa-solid fa-address-card option-icon"></i> ContactMe
        </a>
      </div>
    </div>
  );
};

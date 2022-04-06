import React from "react";
import "./Mobile.css";

export const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i class="fa-solid fa-folder-plus option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fa-solid fa-laptop-code option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i class="fa-solid fa-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contactme">
            <i class="fa-solid fa-address-card option-icon"></i> ContactMe
          </a>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { About } from "./about/About";
import "./Body.css";
import { ContactMe } from "./contact/ContactMe";
import { Projects } from "./projects/Projects";
import { Skill } from "./skills/Skill";
import { Work } from "./work/Work";

export const Body = () => {
  return (
    <div className="body">
      <section id="aboutme">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>
    </div>
  );
};

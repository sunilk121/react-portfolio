import React from "react";
import { About } from "./about/About";
import "./Body.css";
import { ContactMe } from "./contact/ContactMe";
import { Projects } from "./projects/Projects";
import { Skill } from "./skills/Skill";
import { Study } from "./study/Study";

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
      <section id="study">
        <Study />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>
    </div>
  );
};

import React from "react";
import { Social } from "../../common/social-contact/Social";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there my name is sunil kunwar. <br />I love codes.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../images/coding.png")}
            className="main-picture"
            alt=""
          />
        </div>
      </div>
      <div className="about-bottom">
        <Social />
      </div>
    </div>
  );
};

import React from "react";
import { Seperator } from "../../common/seperator/Seperator";
import { Social } from "../../common/social-contact/Social";
import "./contact.css";

export const ContactMe = () => {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-p">
            Want to know further about me? lets catch up for a coffee.
            Please,contact me in any of the platform.
          </p>
          <Social />
        </div>
        <div className="download">
          <a download href={require("../../../assets/Resume.pdf")}>
            <i class="fa-solid fa-download"></i>
            DownLoad Resume
          </a>
        </div>
      </div>
    </div>
  );
};

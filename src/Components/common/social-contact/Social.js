import React from "react";
import { SocialData } from "../../social-data/SocialData";
import "./Social.css";

export const Social = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} alt="" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

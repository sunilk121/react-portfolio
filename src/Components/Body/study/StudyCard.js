import "./studyCard.css";
import React from "react";

export const StudyCard = ({ item }) => {
  return (
    <div className="study-card">
      <img src={item.institutionLogo} className="study-logo" />
      <div className="study-info">
        <label className="study-name">{item.institution}</label>
        <div className="study-dates">
          <label>{item.startDate}</label>-<label>{item.endDate}</label>
        </div>
        <div className="study-description">
          <p>{item.study}</p>
        </div>
      </div>
    </div>
  );
};

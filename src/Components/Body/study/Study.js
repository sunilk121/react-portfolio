import React from "react";
import { Seperator } from "../../common/seperator/Seperator";
import { StudyData } from "../../social-data/StudyData";
import { StudyCard } from "./StudyCard";
import "./Study.css";

export const Study = () => {
  const data = StudyData;
  return (
    <div className="study">
      <Seperator />
      <label className="section-title">Study </label>
      <div className="study-list">
        {data.map((item) => {
          return <StudyCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Study;

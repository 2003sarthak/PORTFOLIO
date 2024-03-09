import "./WorkCardStyle.css";
import React from "react";
import WorkCardData from "./WorkCardData";
import TempWorkCard from "./TempWorkCard";
import {Link } from "react-router-dom";
const Work = () => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkCardData.slice(0, 3).map((val, ind) => {
            return (
              <TempWorkCard
                key={ind}
                imgSrc={val.imgSrc}
                title={val.title}
                text={val.text}
                view={val.view}
                // source={val.source}
              />
            );
          })}
        </div>
      </div>
      <Link to="/project" className="view-more">View More ...</Link>
    </>
  );
};

export default Work;

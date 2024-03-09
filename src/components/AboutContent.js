import "./AboutContentStyle.css";
import React from "react";
import { NavLink } from "react-router-dom";
import skillData from "./SkillData";
import Skill from "./Skill";

const AboutContent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
            A developer enthusiastic, Frontend developer, increasing my
            knowledge with react.js and node.js ,also know programming with
            C,C++,and Data structure and algorithms
          </p>
          <NavLink to='https://sarthak-goyal-portfolio.vercel.app/Sarthak%20Goyal%20Resume.pdf' target="_blank">
            <button className="btn">Resume</button>
          </NavLink>
        </div>
        <div className="right"></div>
      </div>
      <div className="info">
        <div className="skills">
          <h1>Skills</h1>
          <div className="skills-content">
            {skillData.map((val, ind) => {
              return (
                <Skill key={ind} title={val.title} percent={val.percent} />
              );
            })}
          </div>
        </div>
        <div className="education">
          <h1>Education</h1>
          <div>
            <h2>Bachelor Of Technology</h2>
            <p>Harcourt Butler Technical University,</p>
            <p>Kanpur Branch -Information technology (2021-2025) </p>
            <p>YGPA-9.025 in first year.</p>
            <p>YGPA-9.25 in second year</p>
          </div>
          <div>
            <h2>Intermediate-85%</h2>
            <p>SKLGD Public School, Agra-2021</p>
          </div>
          <div>
            <h2>Highschool-95.8%</h2>
            <p>Sachdeva Millennium School, Agra-2019</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;

import './AboutContentStyle.css'
import React from "react";
import { Line} from 'rc-progress'
const Skill = (props) => {
  return (
    <div className="skill">
        <p>{props.title}</p>
      <Line
      style={{width:200}}
        percent={props.percent}
        strokeColor="yellow"
        strokeWidth={4}
        trailColor="white"
        trailWidth={4}
      ></Line>
    </div>
  );
};

export default Skill;

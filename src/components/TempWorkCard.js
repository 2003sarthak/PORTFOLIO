import "./TempWorkCard.css"
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const TempWorkCard = (props) => {
  return (
    <div className="My-work">
        <img src={props.imgSrc} alt="Projects" />
        <div className="layer">
            <h3><u>{props.title}</u></h3>
            <p>{props.text}</p>
            <NavLink to={props.view} target="_blank">
                <FaExternalLinkAlt size={25} className="link"/>
            </NavLink>
        </div>
    </div>
  )
}

export default TempWorkCard

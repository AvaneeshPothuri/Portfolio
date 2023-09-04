import "./WorkCardStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const WorkCard = (props) => {
  return <div className="project-card">
  <img src={props.imgsrc} alt="" />
  <Link to={props.view}><h2 className="project-title">{props.title}</h2></Link>
  <div className="pro-details">
      <p>{props.text}</p>
  </div>
</div>
};

export default WorkCard;

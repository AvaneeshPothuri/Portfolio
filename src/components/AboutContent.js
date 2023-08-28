import "./AboutContentStyles.css";
import MyImg from "../assets/MyPhoto.jpeg"
import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Me</h1>
            <p>Hello, I'm Avaneesh Pothuri, currently a second-year student at BITS Pilani, Hyderabad Campus. As a frontend web developer, I specialize in working with ReactJS and Bootstrap. I'm also in the process of learning about machine learning. While my project experience is still growing, I'm eager to apply and expand my skills. If you have projects that could benefit from my developing expertise or if you're looking for a collaborator, feel free to reach out. Let's explore the potential of working together!</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <img src={MyImg} className="img" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutContent;

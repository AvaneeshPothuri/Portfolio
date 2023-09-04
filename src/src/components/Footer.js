import "./FooterStyles.css";

import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <h4>About Me</h4>
                <p>I'm Avaneesh Pothuri, an undergraduate BE Electronics and Communications Engineering student at BITS Pilani, Hyderabad campus. I'm a Front-end Web Developer.</p>
                
            </div>
            <div className="right">
            <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                         +91    86394   02984
                    </h4>
                </div>
                <div className="mail">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                         pothuriavaneesh@gmail.com
                    </h4>
                </div>
                <div className="social">
                    <Link to="https://www.linkedin.com/in/avaneesh-pothuri/" >
                        <FaLinkedin
                            size={30}
                            style={{color:"#fff" , marginRight:"1rem"}}
                        />
                    </Link>
                    
                    <Link to="https://github.com/AvaneeshPothuri" >
                        <FaGithub
                            size={30}
                            style={{color:"#fff" , marginRight:"1rem"}} 
                        />
                    </Link>

                    <Link to="https://www.instagram.com/avaneesh_pothuri/" >
                        <FaInstagram
                            size={30}
                            style={{color:"#fff" , marginRight:"1rem"}}
                        />
                    </Link>

                    <Link to="https://www.facebook.com/avaneesh.pothuri/">
                        <FaFacebook
                            size={30}
                            style={{color:"#fff" , marginRight:"1rem"}}
                        />
                    </Link>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Footer

import React, { Component } from "react";
import { Link } from 'react-router-dom';

import AboutStory from "./AboutStory";
import AboutFounder from "./AboutFounder";
const About = () => {
    return(
        <div className="row" style={{margin: "0px", padding: "0px"}}>
            <AboutStory />
            <div className="about-img" style={{margin: "0px", padding: "0px"}}><img src={require('../../img/About/about2.jpg')} alt="Our Store" /></div>
            <AboutFounder />

            <div className="about-register">
                <div className="register-content">SPECIALS SIGN UP</div>
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <Link to="../register">SIGN-UP</Link>
            </div>
        </div>
        
    )
}

export default About;
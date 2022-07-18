import { Link } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutheader from "./Aboutheader";
import Aboutfooter from "./Aboutfooter";
import Aboutbody from "./Aboutbody";
import "../css/nicepage.css";
import "../css/home.css";

function About(){
    return(
        <div className="u-body u-xl-mode" data-lang="en">
            <Aboutheader/>
            <Aboutbody/>
            <Aboutfooter/>
        </div>
    )
}

export default About
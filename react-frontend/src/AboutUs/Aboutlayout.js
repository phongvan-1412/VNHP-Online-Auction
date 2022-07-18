import { Link } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import "../css/nicepage.css";
import "../css/home.css";


class Aboutlayout extends Component{
    render(){
        return(
            <Routes>
                <Route path="/about" element={<About />}></Route> 
            </Routes>   
        )
    }
}

export default Aboutlayout;


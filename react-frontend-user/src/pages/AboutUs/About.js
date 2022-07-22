import React, { Component } from "react";

import AboutPost from './AboutPost';
import AboutFounder from './AboutFounder';
import AboutInvestor from "./AboutInvestor";


class About extends Component{
    render(){
        return(
            <div className="u-body u-xl-mode" data-lang="en">
                <AboutFounder/>
                <AboutInvestor/>
            </div>
        )
    }
}

export default About;
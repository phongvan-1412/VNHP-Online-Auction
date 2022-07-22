import React, { Component } from "react";

import AboutPost from './AboutPost';
import AboutBody from './AboutBody';
import AboutInvestor from "./AboutInvestor";


class About extends Component{
    render(){
        return(
            <div className="u-body u-xl-mode" data-lang="en">
                <AboutBody/>
                <AboutInvestor/>
            </div>
        )
    }
}

export default About;
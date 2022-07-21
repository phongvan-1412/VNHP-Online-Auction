import React, { Component } from "react";
import Aboutheader from "./Aboutheader";
import Aboutfooter from "./Aboutfooter";
import Aboutbody from "./Aboutbody";
import Aboutinvestor from "./Aboutinvestor";


class About extends Component{
    render(){
        return(
            <div className="u-body u-xl-mode" data-lang="en">
                <Aboutheader title="ABOUT US"/>
                <Aboutbody/>
                <Aboutinvestor/>
                <Aboutfooter/>
            </div>
        )
    }
}

export default About
import React, { Component } from "react";
import Aboutheader from "../AboutUs/Aboutheader";
import Aboutfooter from "../AboutUs/Aboutfooter";
import Contacts from "./Contacts";


class Contact extends Component{
    render(){
        return(
            <div className="u-body u-xl-mode" data-lang="en">
                <Aboutheader title="CONTACT US"/>
                <Contacts/>
                <Aboutfooter/>
            </div>
        )
    }

}

export default Contact
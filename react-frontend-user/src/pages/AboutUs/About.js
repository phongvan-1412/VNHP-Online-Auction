import React, { Component } from "react";
import Slider from "react-slick";

import AboutStory from "./AboutStory";
import AboutFounder from "./AboutFounder";

class About extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
  
    render() {
      const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed :3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
      };
      return (
        <div className="row" style={{margin: "0px", padding: "0px"}}>
            <AboutStory />

            <Slider ref={(c) => (this.slider = c)}{...settings} className="about-img" style={{margin: "0px", padding: "0px"}}>
                <img src={require('../../img/About/about2.jpg')}/>
                <img src={require('../../img/About/about3.jpg')}/>
            </Slider>

            <AboutFounder />
        </div>
      )
    }
}        
export default About;

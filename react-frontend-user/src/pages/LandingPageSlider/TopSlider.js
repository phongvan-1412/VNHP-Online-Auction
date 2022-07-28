import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TopSlider extends Component {
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
      autoplaySpeed :2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    };
    return (
      <div className="landingpage-topslide-wrapper" style={{margin: "0px", padding: "0px"}}>
        <Slider ref={(c) => (this.slider = c)}{...settings} >
          <img className="landingpage-topslide-img" src={require("../../img/LandingPage/landingpage_topslide.jpg")} />
          <img className="landingpage-topslide-img" src={require(`../../img/LandingPage/landingpage_topslide1.jpg`)} />
        </Slider>

        <ul className="landingpage-topslide-message-wrapper list">
          <li className="landingpage-topslide-text list-item" >
            <span className="split-text" data-text="VNHP ONLINE AUCTION">VNHP ONLINE AUCTION</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopSlider;

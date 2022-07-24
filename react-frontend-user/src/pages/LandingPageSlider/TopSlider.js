import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
      autoplaySpeed :3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true
    };
    return (
      <div className="row page-content-panel landingpage-topslide-wrapper" style={{ padding: "0px", margin: "0px"}}>
          <Slider ref={(c) => (this.slider = c)}{...settings} className="page-content landingpage-topslide-img-wrapper" style={{ padding: "0px", margin: "0px"}}>
              <img
                className="page-content landingpage-topslide-img"
                src={require('../../img/LandingPage/landingpage_topslide.jpg')}
                />
              <img
                className="page-content landingpage-topslide-img"
                src={require('../../img/LandingPage/landingpage_topslide1.jpg')}
                />
          </Slider>

          <div className="landingpage-topslide-message-wrapper" style={{ padding: "0px", margin: "0px"}}>
            <div className="landingpage-topslide-logo">
              <Link to="/"><img src={require('../../img/Header/logo.jpg')}/></Link>
            </div>
            <h2 className="landingpage-topslide-quote" >
              The VNHP Online Auction portal is your gate to the auction houses' arena
            </h2>
          </div>

        </div>
    );
  }
}

export default TopSlider;

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
      autoplaySpeed :3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    };
    return (
      <div className="row page-content-panel landingpage-slider">
        <div>
          <button
            type="button"
            className="slick-prev"
            onClick={this.previous}
          >
            Previous
          </button>
        </div>
        <div>
          <Slider ref={(c) => (this.slider = c)}{...settings}>
            <img
              className="page-content row-panel-img"
              src={require("../../img/LandingPage/landingpage_topslide.jpg")}
              />
            <img
              className="page-content row-panel-img"
              src={require(`../../img/LandingPage/landingpage_topslide1.jpg`)}
              />
          </Slider>
        </div>
        <div>
          <button
            type="button"
            className="slick-next"
            onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default TopSlider;

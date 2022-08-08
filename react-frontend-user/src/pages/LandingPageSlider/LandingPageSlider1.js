import React, { Component, useState, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

import SliderItem1 from "./SliderItem1";

const LandingPageSlider1 = ({ products }) => {
  //SLIDER
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  //SEARCH PRODUCT BY SLIDER
const [filter, setFilter] = useState("")
  return (
    <div className=" landingpage-slider slide-title">
      <div className="slide-title top-content">
        <h4>
          <b>UPCOMING AUCTIONS</b>
        </h4>
        <input
          id="searchproduct"
          placeholder="Search Product..."
          onKeyUp={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      <Slider ref={ref} {...settings}>
        {products.slice(0, 15).filter((val, index) => {
          if(filter === ""){
            return val;
          }else if((val.product_name.replace(/-/g, " ").toLowerCase()).includes(filter.toLowerCase())){
            return val;
          }else if((val.category_name.replace(/-/g, " ").toLowerCase()).includes(filter.toLowerCase())){
            return val;
          }else if((val.product_start_price.toLowerCase()).includes(filter.toLowerCase())){
            return val;
          }else if((val.product_start_aution_day.toLocaleString()).includes(filter.toLocaleString())){
            return val;
          }
          
        }).map((val) => {
          return(
            <div className="product-grid-wrapper" key={val.product_id} >
              <SliderItem1 product={val}></SliderItem1>
            </div>
          )
        })
      }
      </Slider>

      <div className="btn-click">
        <button type="button" className="btn-previous" onClick={previous}>
          <GiPreviousButton />
        </button>

        <button type="button" className=" btn-next" onClick={next}>
          <GiNextButton />
        </button>
      </div>
    </div>
  );
};

export default LandingPageSlider1;

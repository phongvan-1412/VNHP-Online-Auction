import React, { Component, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import SliderItem2 from "./SliderItem2";

const LandingPageSlider2 = ({products}) => {
  //SLIDER
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: false, 
    infinite: false, 
    speed: 250, 
    slidesToShow: 5, 
    slidesToScroll: 5,
  };
  
  const [horizontalState, setHorizontalState] = useState(1);

  const horizontalTab = (index) => { 
    setHorizontalState(index.target.value);
  };
  
  //SEARCH PRODUCT BY SLIDER
  function Search() {
    var value = $("#search").val().toLowerCase();
    $("#ending-soon div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }
    return (
        <div className=" landingpage-slider slide-title">
          <div className="slide-title top-content">
            <h4><b>ENDING SOON</b></h4>
            <input 
            id="searchproduct" 
            placeholder="Search..." 
            onKeyUp={(e) => {
              setFilter(e.target.value);
            }}/>
          </div>

          <Slider ref={ref} {...settings}>
            {products.filter((val) => {
                if(filter == ""){
                  return val;
                }else if((
                val.product_name.toLowerCase() 
                || val.category_name.toLowerCase()).includes(filter.toLowerCase())){
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
  }

export default LandingPageSlider2;

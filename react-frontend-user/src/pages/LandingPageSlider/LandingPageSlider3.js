import React, { Component, useState, useRef } from "react";
import Slider from "react-slick";
import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import SliderItem3 from "./SliderItem3";

const LandingPageSlider3 = ({products}) => {
  //SLIDER
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = { dots: false, infinite: true, speed: 250, slidesToShow: 5, slidesToScroll: 5,
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
    ]};
  
  //SEARCH PRODUCT BY SLIDER
  // function Search() {
  //   var value = $("#search").val().toLowerCase();
  //   $("#hot-auction div").filter(function () {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  //   });
  // }
  const [filters, setFilters] = useState("");

    return (
        <div className=" landingpage-slider slide-title">
          <div className="slide-title top-content">
            <h4><b>HOT AUCTIONS</b></h4>
            <input 
            id="searchproduct" 
            placeholder="Search..." 
            onKeyUp={(e) => {
              setFilters(e.target.value);
            }}/>
          </div>

          <Slider ref={ref} {...settings}>
            {products.slice(0, 35).filter((val) => {
                if(filters === ""){
                  return val;
                }else if((val.product_name.replace(/-/g, " ").toLowerCase()).includes(filters.toLowerCase())){
                  return val;
                }else if((val.category_name.replace(/-/g, " ").toLowerCase()).includes(filters.toLowerCase())){
                  return val;
                }else if((val.product_start_price.toLowerCase()).includes(filters.toLowerCase())){
                  return val;
                }else if((val.product_start_aution_day.toLocaleString()).includes(filters.toLocaleString())){
                  return val;
                }
              }).map((val) => {
                return(
                  <div className="product-grid-wrapper" key={val.product_id} >
                    <SliderItem3 product={val}></SliderItem3>
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


export default LandingPageSlider3;

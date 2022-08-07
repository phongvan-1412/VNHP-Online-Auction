import React, { Component, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiConsoleController, GiNextButton, GiPreviousButton} from 'react-icons/gi'

import SliderItem2 from "./SliderItem2";
const LandingPageSlider2 = ({endingSoonProducts}) => {
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
  // function Search() {
  //   var value = $("#search").val().toLowerCase();
  //   $("#ending-soon div").filter(function () {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  //   });
  // }
  const [filterProduct, setFilterProduct] = useState("");
    return (
        <div className=" landingpage-slider slide-title">
          <div className="slide-title top-content">
            <h4><b>ENDING SOON</b></h4>
            <input 
            id="searchproduct" 
            placeholder="Search..." 
            onKeyUp={(e) => {
              setFilterProduct(e.target.value);
            }}/>
          </div>

          <Slider ref={ref} {...settings}>
            {endingSoonProducts.slice(0, 30).filter((product) => {
                if(filterProduct.length == 0){
                  return product;
                }else if((product.product_name.replace(/-/g, " ").toLowerCase()).includes(filterProduct.toLowerCase())){
                  return product;
                }else if((product.category_name.replace(/-/g, " ").toLowerCase()).includes(filterProduct.toLowerCase())){
                  return product;
                }else if((product.product_start_price.toLowerCase()).includes(filterProduct.toLowerCase())){
                  return product;
                }else if((product.product_start_aution_day.toLocaleString()).includes(filterProduct.toLocaleString())){
                  return product;
                }
              }).map((product) => {
                return(
                  <div className="product-grid-wrapper" key={product.product_id} >
                    <SliderItem2 product={product}></SliderItem2>
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

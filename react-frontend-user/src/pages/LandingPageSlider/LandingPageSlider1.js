import React, { Component, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import ProductItem from "../../pages/Products/ProductByCategory/ProductItem";

const LandingPageSlider1 = ({products}) => {
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = { dots: false, infinite: false, speed: 350, slidesToShow: 5, slidesToScroll: 5};
  

  const [horizontalState, setHorizontalState] = useState(1);

  const horizontalTab = (index) => { 
    setHorizontalState(index.target.value);
  };

    return (
        <div className=" landingpage-slider slide-title">
          <div className="slide-title top-content">
            <div id="timer"></div>
            <h4>
              <b>UPCOMING AUCTIONS</b>
            </h4>
            {/* <button value={1} name="Breakfast" className={ horizontalState == 1 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Breakfast</button> */}
            {/* <button value={2} name="Chocolate" className={ horizontalState == 2 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Chocolate</button> */}
          </div>

          <Slider ref={ref} {...settings}>
            {products.map((product) => (
            <div className="product-grid-wrapper" key={product.product_id}>
               <SliderItem1 product={product}></SliderItem1>
            </div>
            ))}
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


export default LandingPageSlider1;

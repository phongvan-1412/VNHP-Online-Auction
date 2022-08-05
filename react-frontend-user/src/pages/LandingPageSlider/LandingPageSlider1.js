import React, { Component, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const [filter, setFilter] = useState("");
  let tmpProduct = [];

  if (filter == "" || tmpProduct == []) {
    tmpProduct = products;
  }
  products.forEach((product) => {
    if (
      (
        product.product_start_price.toLowerCase() ||
        product.product_name.toLowerCase() ||
        product.category_name.toLowerCase() ||
        product.product_end_aution_day.toLowerCase()
      ).includes(filter.toLowerCase())
    ) {
      tmpProduct = [...tmpProduct, product];
    }
  });

  return (
    <div className=" landingpage-slider slide-title">
      <div className="slide-title top-content">
        <h4>
          <b>UPCOMING AUCTIONS</b>
        </h4>
        <input
          id="searchproduct"
          placeholder="Search..."
          onKeyUp={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      <Slider ref={ref} {...settings}>
        {tmpProduct.map((val) => {
          return (
            <div className="product-grid-wrapper" key={val.product_id}>
              <SliderItem1 product={val}></SliderItem1>
            </div>
          );
        })}
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

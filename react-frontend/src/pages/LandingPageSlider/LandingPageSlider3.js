import React, { useRef } from "react";
import $ from "jquery";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

import ProductItem from "../Products/ProductByCategory/ProductItem";

const LandingPageSlider3 = ({ products, categories, test }) => {
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
    speed: 350,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  
  let horizontalState = 1;
  const horizontalTab = (e) => {
    horizontalState = e.target.value;
    $("#data").data("categoryid", e.target.name);
    test();
  };

  return (
    <div className=" landingpage-slider slide-title">
      <div className="slide-title top-content">
        <h4>
          <b>PRODUCTS</b>
        </h4>
        {categories.map((category) => {
          return (
            <button
              value={category.category_name}
              name={category.category_id}
              className={
                horizontalState === category.category_name
                  ? "btn-category mb-2 btn-active-show"
                  : "btn-category mb-2 btn-show"
              }
              onClick={horizontalTab}
            >
              {category.category_name}
            </button>
          );
        })}
      </div>

      <Slider ref={ref} {...settings}>
        {products.map((product) => (
          <ProductItem
            key={product.product_SKU}
            product={product}
          ></ProductItem>
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
};

export default LandingPageSlider3;

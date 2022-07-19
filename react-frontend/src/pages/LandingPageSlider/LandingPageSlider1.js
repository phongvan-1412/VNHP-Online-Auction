import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

import ProductItem from "../Products/ProductByCategory/ProductItem";

const LandingPageSlider1 = ({products}) => {
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
  
  return (
    <div className=" landingpage-slider slide-title">
      <div className="slide-title top-content">
        <h4>
          <b>UP COMING PRODUCTS</b>
        </h4>
      </div>
      <input
        type="text"
        id="data1"
        data-categories={""}
        data-categoriesroot={""}
        data-cart={""}
        data-products={""}
        hidden
      />

      <Slider ref={ref} {...settings}>
        {products.map((product) => (
          <div className="product-grid-wrapper">
            <ProductItem
              key={product.product_SKU}
              product={product}
            ></ProductItem>
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
};

export default LandingPageSlider1;

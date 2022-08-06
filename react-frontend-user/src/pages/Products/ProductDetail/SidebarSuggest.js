import React, { Component, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import ProductSuggestSideBar from "./ProductSuggestSideBar";


const SidebarSuggest = ({ products }) => {
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
   
  const settings = { dots: false, infinite: false, speed: 500, slidesToShow: 1, rows: 3, slidesToScroll: 1, arrows: false};

    return (
      <div className="sidebar-suggest-wrapper">

        {/* sidebar-suggest-product */}
        <div>
          <div className="sidebar-suggest-content">
            <div className="sidebar-suggest-title">
              <h4>FEATURED PRODUCTS</h4>
            </div>

            <Slider ref={ref} {...settings}>
              {products.map((product) => (
                <div className="product-grid-wrapper" key={product.product_id}>
                  <ProductSuggestSideBar product={product}/>
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
        </div>
      </div>
    );
  } 

export default SidebarSuggest;

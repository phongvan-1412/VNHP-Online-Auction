import React, { Component, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import { productSlideCategorySelector2 } from "../../../redux/selector/selectors";
import { productSlideCategory2 } from "../../../redux/actions/productsActions";
import ProductItem from "../../pages/Products/ProductByCategory/ProductItem";

const LandingPageSlider2 = () => {
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = { dots: false, infinite: false, speed: 500, slidesToShow: 5, slidesToScroll: 1};
  
  const localProducts = useSelector(productSlideCategorySelector2);

  const dispatch = useDispatch();
  const [horizontalState, setHorizontalState] = useState(1);

  const horizontalTab = (index) => { 
    setHorizontalState(index.target.value);
    dispatch(productSlideCategory2(index.target.name))
  };
  
    return (
      <div>
        <div className="slide-title">
          <div className="slide-title top-content">
            <h4>
              <b>FRESH FOOD</b>
            </h4>
            <button value={1} name="Fruit" className={ horizontalState == 1 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Fruit</button>
            <button value={2} name="Meat" className={ horizontalState == 2 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Meat</button>
          </div>

          <Slider ref={ref} {...settings}>
            {localProducts.map((product) => (
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
      </div>
    );
  }


export default LandingPageSlider2;

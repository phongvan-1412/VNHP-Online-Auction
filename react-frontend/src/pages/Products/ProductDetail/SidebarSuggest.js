import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import ProductDetailItemSlide from "./ProductDetailItemSlide";


class SidebarSuggest extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render(){
    const { products} = this.props;
   
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      rows: 3,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <div className="sidebar-suggest-wrapper">
        {/* sidebar-suggest-img */}
        <div className="sidebar-suggest-img">
          <img
            src={require("../../../img/Product/ProductDetail/freeship.jpg")}
          />
        </div>

        {/* sidebar-suggest-product */}
        <div>
          <div className="sidebar-suggest-content">
            <div className="sidebar-suggest title">
              <h4>FEATURED PRODUCTS</h4>
            </div>

            <Slider ref={(c) => (this.slider = c)} {...settings}>
                {products.map(product=>(
                    <ProductDetailItemSlide
                    key={product.product_SKU}
                    product={product}
                  ></ProductDetailItemSlide>
                ))}
                
            </Slider>

            <div className="btn-click">
              <button
                type="button"
                className="btn-previous"
                onClick={this.previous}
              >
                <GiPreviousButton />
              </button>
              <button type="button" className=" btn-next" onClick={this.next}>
                <GiNextButton />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default SidebarSuggest;

import React, { Component, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductQuickviewDetails from "../ProductByCategory/ProductQuickViewDetails";

const ProductDetailItemSlide = ({ product }) => {
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
    infinite: true,
    autoplay: true,
    autoplaySpeed :2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: true,
    vertical: false
  };
    return (
      <div className="row product-quickview-item-slide">
        <div className="col-md-6 product-quickview-item slide-img">
          <Link
            to={`/${product.category_id}/${product.product_name}`}
            replace
            className="quickview-thumbnail-wrapper"
          >
            <img
              className="quickview-thumbnail"
              
              src={ "http://localhost:8000/ProductImg/" + product.product_thumbnail_img_name}
            />
          </Link>

          <div className="quickview-img-wrapper" key={product.product_id} >
            <img
                className="quickview-img"
                src={"http://localhost:8000/ProductImg/" + product.product_img_name1}
              />
              <img
                className="quickview-img"
                src={"http://localhost:8000/ProductImg/" + product.product_img_name2}
              />
              <img
                className="quickview-img"
                src={"http://localhost:8000/ProductImg/" + product.product_img_name3}
              />
            </div>
        </div>

        <div className="col-md-6">
          <div className="product-quickview-product-name">
            <Link
              to={`/${product.category_id}/${product.product_name}`}
              replace
            >
              {product.product_name.replace(/-/g, " ")}
            </Link>
          </div>

          <div className="product-quickview-price-wrapper">
            <div className="product-quickview-price">
              <b className="product-quickview-startprice-headtext">Start price: </b> 
              <span className="product-quickview-startprice">$ {parseInt(product.product_start_price).toLocaleString()}</span>
            </div>

            <div className="product-quickview-product-price">
              <b className="product-quickview-currentprice-headtext">Current bid: </b> 
              <span className="product-quickview-currentprice">$ {parseInt(product.current_bid).toLocaleString()}</span>
            </div>
          </div>
          
          <ProductQuickviewDetails product={product}/>
          
        </div>
      </div>
    );
  }

export default ProductDetailItemSlide;

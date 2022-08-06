import React, { Component } from "react";
import { Link } from "react-router-dom";

const ProductSuggestSideBar = ({ product }) => {
    return (
      <div className="row product-detail-item-slide">
        <div className="col-md-6 product-detail-item slide-img">
          <Link
            to={`/${product.category_id}/${product.product_name}`}
            replace
            className="product-name-item"
          >
            <img
              className="product-detail-item-slide product-img"
              
              src={"http://localhost:8000/ProductImg/" +product.product_thumbnail_img_name}
            />
          </Link>
        </div>

        <div className="col-md-6 product-detail-item slide-content">
          <div className="sidebar-suggest-product-name">
            <Link
              to={`/${product.category_id}/${product.product_name}`}
              replace
            >
              {product.product_name.replace(/-/g, " ")}
            </Link>
          </div>

          <div className="sidebar-suggest-product-price-wrapper">
            <div className="sidebar-suggest-product-price">
              <b className="sidebar-suggest-startprice-headtext">Start price: </b> 
              <span className="sidebar-suggest-startprice">$ {parseInt(product.product_start_price).toLocaleString()}</span>
            </div>

            <div className="sidebar-suggest-product-price">
              <b className="sidebar-suggest-currentprice-headtext">Current bid: </b> 
              <span className="sidebar-suggest-currentprice">$ {parseInt(product.current_bid).toLocaleString()}</span>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

export default ProductSuggestSideBar;
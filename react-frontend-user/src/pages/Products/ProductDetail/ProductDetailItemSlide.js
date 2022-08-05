import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const ProductDetailItemSlide = ({ product }) => {
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
              src={require(`../../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
            />
          </Link>
        </div>

        <div className="col-md-6 product-detail-item slide-content">
          <div className="product-name">
            <Link
              to={`/${product.category_id}/${product.product_name}`}
              replace
              className="product-detail-item-name"
            >
              {product.product_name}
            </Link>
          </div>

          <div className="sidebar-suggest-product-price"><b>Start price</b> $ {product.product_start_price}</div>
          <div className="sidebar-suggest-product-price"><b>Current bid</b>$ {product.current_bid}</div>
        </div>
      </div>
    );
  }

export default ProductDetailItemSlide;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import $ from "jquery";

const ProductItem = ({ product }) => {
  return (
    <div className="product-grid">
      <div>
        <Link
          //to={`/${product.category_name}/${product.product_name}`}
          to="#"
          replace
          className="product-name-item"
        >
          <img className="product-item-content product-img" src={require(`../../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}/>
        </Link>
      </div>

      <div className="category-name">
        {product.category_name.replace(/-/g, " ")}
      </div>

      <div className="product-name">
        <Link
          //to={`/${product.category_name}/${product.product_name}`}
          to="#"
          replace
          className="product-name-item"
        >
          {product.product_name.replace(/-/g, " ")}
        </Link>
      </div>

      <div className="product-price">
        {parseInt(product.product_price_per_unit).toLocaleString()}đ
      </div>

      <div className="cart-icons">
        <FaShoppingCart
          className="meta-cart"
          style={{ cursor: "pointer" }}
          // onClick={()=> {this.props.addProductToCart(product,1)}}
        />
        <FaHeart className="meta-wishlist" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default ProductItem;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class ProductDetailItemSlide extends Component {
  render() {
    const { product } = this.props;
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
              // src={require(`../../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
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

          <div className="product-price">{product.product_price_per_unit}đ</div>
        </div>
      </div>
    );
  }
}
//   ProductDetailItemSlide.propTypes = {
//     product: PropTypes.object.isRequired,
//     addProductToCart: PropTypes.func.isRequired,
//   };

export default ProductDetailItemSlide;

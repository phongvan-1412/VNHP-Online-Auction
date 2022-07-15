import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ProductDetailItem from "../ProductDetail/ProductDetailItem";

class ProductQuickView extends Component {
  state = {
    isOpen: false,
  };
  render() {
    const { productShow, product } = this.props;
    let isOpen = productShow;
    return (
      <div
        className="container"
        style={{
          position: "absolute",
          width: "2000px",
          height: "2000px",
        }}
      >
        {isOpen ? (
          <div
            className="row"
            style={{
              background: "gray",
              position: "absolute",
              width: "700px",
              height: "700px",
            }}
          >
            <div>
              <ProductDetailItem product={product} />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ProductQuickView;

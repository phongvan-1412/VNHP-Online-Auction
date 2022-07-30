import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailItem = ({ product }) => { 
  return (
    <div className="row">
      <div style={{marginLeft:'200px'}}></div>

      <div className="col-md-6 product-detail-img-wrapper">
        <img
          className="product-detail-img"
          src={require(`../../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
        />
      </div>

      <div className="col-md-6 product-detail-info-wrapper">
        <div className="product-detail-product-name">
          <h3>{product.product_name.replace(/-/g, " ")}</h3>
        </div>

        <div className="product-detail-info-price">
          <div className="product-detail product-info-review-wrapper">
            <div className="reviews-action">
              <Link to="#">Be the first to review this product</Link>
            </div>

            <div className="stock">
              <BsFillBagCheckFill className="meta-instock" />
              <span>{product.product_status == 1 ? "In Stock" : "Sold"}</span>
            </div>
          </div>
          <div className="product-detail-product-price">
            $ {parseInt(product.product_start_price).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;

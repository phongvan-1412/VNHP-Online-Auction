import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailItem = ({ product }) => { 
  var productEndDate = product.product_end_aution_day ;
  
  var countDownDate = new Date(product.product_end_aution_day).getTime();

  var productNow = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById('productnow' + product.product_id + product.product_name) == null) return;
    if (document.getElementById('productnow' + product.product_id + product.product_name) == null || distance < 0){
      clearInterval(productNow);
      document.getElementById('productnow' + product.product_id + product.product_name).innerHTML = "EXPIRED";
    }
    document.getElementById('productnow' + product.product_id + product.product_name).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";}, 1000);
  return (
    <div className="row">

      <div className="col-md-6 product-detail-img-wrapper">
        <img
          className="product-detail-img"
          src={require(`../../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
        />
      </div>

      <div className="col-md-6 product-detail-info-wrapper">
        <div id={'productnow' + product.product_id + product.product_name}></div>
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

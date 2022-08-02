import React from "react";
import axios from 'axios';
import $ from 'jquery';
import { Link } from "react-router-dom";

import { BsFillBagCheckFill } from "react-icons/bs";

const DetailItem = ({ product }) => { 
  //COUNTDOWN
  // var productEndDate = product.product_end_aution_day ;
  
  // var countDownDate = new Date("product.product_end_aution_day").getTime();
  var countDownDate = new Date(new Date("8/1/2022, 2:26:00 PM").toLocaleString()).getTime();

  var productNow = setInterval(function() {
    var now = new Date(new Date().toLocaleString()).getTime();
  
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById(product.product_id + product.product_name) == null) return;
    if (distance <= 0){
      clearInterval(productNow);
      document.getElementById(product.product_id + product.product_name).innerHTML = "EXPIRED";
      
      var countdownProduct = product.product_id;
      var countdownCustomer = JSON.parse(localStorage.getItem("customer_info")).customer_id;
      // console.log(countdownCustomer)

      var days = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
      axios
        .post("http://127.0.0.1:8000/api/countdownend", {countdownProduct, countdownCustomer})
        .then(function (response) {
          console.log(response.data)
            // if (response.data.length > 0) {
            //     result.text("Successful.");
            //     result.css("color", "green");
            // } else {
            //     result.text("Failed.");
            //     result.css("color", "red");
            // }
            });

    }
    document.getElementById(product.product_id + product.product_name).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";}, 1000);
    
    return (
    <div className="row">

      <div className="col-md-6 product-detail-img-wrapper">
        <img
          className="product-detail-img"
          src={require(`../../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
        />
      </div>

      <div className="col-md-6 product-detail-info-wrapper">
        <div id={ product.product_id + product.product_name}></div>
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

import React, { useState } from "react";
import axios from 'axios';
import $ from 'jquery';
import { Link } from "react-router-dom";

import { BsFillBagCheckFill } from "react-icons/bs";

const DetailItem = ({ product }) => { 
  //COUNTDOWN
  // var productEndDate = product.product_end_aution_day ;
  
  // var countDownDate = new Date("product.product_end_aution_day").getTime();
  var countDownDate = new Date(new Date("8/3/2022, 2:26:00 PM").toLocaleString()).getTime();

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
      
      //
      var countdownProduct = product.product_id;
      var countdownCustomer = JSON.parse(localStorage.getItem("customer_info")).customer_id;

      var days = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
      axios
        .post("http://127.0.0.1:8000/api/countdownend", {countdownProduct, countdownCustomer})
        .then(function (response) {
          console.log(response.data)
            });

    }
    document.getElementById(product.product_id + product.product_name).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";}, 1000);
    

    //BIDDING PRICE
    const [currentBid, setCurrentBid] = useState(product.product_price_aution);
    const onKeyUp = (event) => {
        if (event.key === "Enter") {
            const productId = product.product_id;
            const customerId = JSON.parse(localStorage.getItem("customer_info")).customer_id;
            const auctionDay = new Date(new Date().toLocaleString());
            const realBidPrice = event.target.value;

            const result = $("#result-bidprice");

            axios
                .post("http://127.0.0.1:8000/api/currentbidprice", {realBidPrice, productId, customerId, auctionDay} )
                .then(function (res) {
                  console.log(res.data)
                    if (res.data > 0) {
                        setCurrentBid(realBidPrice)
                        result.text("Your price is acceptable");
                        result.css("color", "green");
                        $("#result-bidprice");
                        $("#input-bidprice").val("");
                    } else {
                        result.text("Your price is invalid");
                        result.css("color", "red");
                    }
                });
        }
    }

    //CLEAR ANNOUCEMENT
    // const onChange = () => {
    //   $("#input-bidprice").val("") ;
    // }
    
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

          <div className="product-detail-price-wrapper">
            <div className="product-detail-product-price-wrapper">
              <span className="product-detail-product-price-headtext">Start Price: </span>
              <span className="product-detail-product-price">$ {parseInt(product.product_start_price).toLocaleString()}</span>
            </div>

            <div className="product-detail-product-currentprice-wrapper">
              <span className="product-detail-product-currentprice-headtext">Current Bid: </span>
              <span className="product-detail-product-currentprice">$ {parseInt(currentBid).toLocaleString()}</span>
            </div>
          </div>

          <div id="result-bidprice"></div>

          <div className="product-detail-product-bidprice-wrapper">
            <input id="input-bidprice" className="product-detail-product-bidprice" type="number" min={product.product_start_price} step="10" placeholder="Your Max Bid" onKeyUp={onKeyUp} />
            <Link to="/register" className="product-detail-product-bidprice-register">Register to Bid</Link>
          </div>

          <div className="product-detail-product-bidprice-headtext"><i className="fa-solid fa-lock"/> Secure Bidding</div>

          <div className="product-detail-product-categoryname">{product.category_name.replace(/-/g, " ")}</div>

          <div className="product-detail-product-owner"> by {product.customer_name.replace(/-/g, " ")}</div>

          <div className="product-detail-product-info-realtime-wrapper">
            <div className="product-detail-product-realdate"><b>{product.product_end_aution_day}</b></div>
            <div className="product-detail-product-realtime"></div>
            <div className="product-detail-product-realtime-headtext"><i className="fa-solid fa-clock"/> Timed Auction</div>
          </div>

          <div className="product-detail-product-owner-address">{product.customer_address}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;

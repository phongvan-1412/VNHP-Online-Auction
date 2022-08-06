import React, { useState } from "react";
import axios from "axios";
import $ from "jquery";
import { Link } from "react-router-dom";

import { BsFillBagCheckFill } from "react-icons/bs";

const DetailItem = ({ product,updateProduct }) => {
  let checkUser = false;
  const [loading, setLoading] = useState(false);
  const [validBidding, setValidBidding] = useState(false);

  if (JSON.parse(localStorage.getItem("customer_info")) != null) {
    checkUser = true;
  }
  //COUNTDOWN
  var productEndDate = product.product_end_aution_day;
  // var countDownDate = new Date(new Date("2022/08/04 20:48:00").toLocaleString()).getTime();
  var countDownDate = new Date(
    new Date(productEndDate).toLocaleString()
  ).getTime();

  var productNow = setInterval(function () {
    var now = new Date(new Date().toLocaleString()).getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (
      document.getElementById(product.product_id + product.product_name) == null
    )
      return;
    if (distance <= 0) {
      clearInterval(productNow);
      document.getElementById(
        product.product_id + product.product_name
      ).innerHTML = "EXPIRED";

      //
      var countdownProduct = product.product_id;

      var days = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;

      axios
        .post("http://127.0.0.1:8000/api/countdownend", { countdownProduct })
        .then(function (response) {
          // console.log(response.data)
        });
    }
    document.getElementById(
      product.product_id + product.product_name
    ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

  //BIDDING PRICE
  const [currentBid, setCurrentBid] = useState(product.current_bid);
  const setTime = () => {
    $(".result-bidprice").text("");
  };
  const onKeyUp = (event) => {
    const realBidPrice = event.target.value;
    const result = $(".result-bidprice");

    if (realBidPrice > 100000) {
      result.text("Max bid $100k");
      result.css("color", "red");
      return;
    }
    setValidBidding(realBidPrice > 100000)
    if (event.key === "Enter") {
      const productId = product.product_id;
      const customerId = JSON.parse(
        localStorage.getItem("customer_info")
      ).customer_id;
      const auctionDay = new Date(new Date().toLocaleString());
      setLoading(true);
      axios
        .post("http://127.0.0.1:8000/api/currentbidprice", {
          realBidPrice,
          productId,
          customerId,
          auctionDay,
        })
        .then(function (res) {
          if (res.data > 0) {
            setCurrentBid(realBidPrice);
            result.text("Your price is acceptable");
            result.css("color", "green");
          } else {
            result.text("Your price is invalid");
            result.css("color", "red");
          }
          $("#input-bidprice").val("");
          setInterval(setTime, 2000);
          updateProduct();
          setLoading(false);
        });
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 product-detail-img-wrapper">
        <img
          className="product-detail-img"
          src={ "http://localhost:8000/ProductImg/" + product.product_thumbnail_img_name}/>
      </div>

      <div className="col-md-6 product-detail-info-wrapper">
        <div
          id={product.product_id + product.product_name}
          className="product-detail-countdown"
        ></div>
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
              <span className="product-detail-product-price-headtext">
                Start Price:{" "}
              </span>
              <span className="product-detail-product-price">
                $ {parseInt(product.product_start_price).toLocaleString()}
              </span>
            </div>

            <div className="product-detail-product-currentprice-wrapper">
              <span className="product-detail-product-currentprice-headtext">
                Current Bid:{" "}
              </span>
              <span className="product-detail-product-currentprice">
                $ {parseInt(currentBid).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="result-bidprice"></div>

          <div className="product-detail-product-bidprice-wrapper">
            {checkUser ? (
              <div>
                {loading ? (
                  <div className="container">
                    <div className="row">
                      <div className="justify-content-center">
                        <div
                          className="spinner-border  spinner-border-sm"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                <input
                  id="input-bidprice"
                  className="product-detail-product-bidprice"
                  type="number"
                  min={product.product_start_price}
                  step="10"
                  placeholder="Your Max Bid"
                  onKeyUp={onKeyUp}
                  disabled={validBidding || loading}
                />
              </div>
            ) : null}

            <Link
              to="/login"
              className="product-detail-product-bidprice-register"
            >
              Login to Bid
            </Link>
          </div>

          <div className="product-detail-product-bidprice-headtext">
            <i className="fa-solid fa-lock" /> Secure Bidding
          </div>

          <div className="product-detail-product-categoryname">
            {product.category_name.replace(/-/g, " ")}
          </div>

          <div className="product-detail-product-owner">
            {" "}
            by {product.customer_name}
          </div>

          <div className="product-detail-product-info-realtime-wrapper">
            <div className="product-detail-product-realdate">
              <b>{product.product_end_aution_day}</b>
            </div>
            <div className="product-detail-product-realtime"></div>
            <div className="product-detail-product-realtime-headtext">
              <i className="fa-solid fa-clock" /> Timed Auction
            </div>
          </div>

          <div className="product-detail-product-owner-address">
            {product.customer_address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import $ from "jquery";

const SliderItem3 = ({ product, hotAuctionProducts }) => {
  var countDownDate = new Date(product.product_end_aution_day).getTime();

  var slider3 = setInterval(function () {
    var productStartDate = product.product_start_aution_day;
    var productEndDate = product.product_end_aution_day;

    var countDownStartDate = new Date(new Date(productStartDate).toLocaleString()).getTime();
    var countDownEndDate = new Date(new Date(productEndDate).toLocaleString()).getTime();
    var now = new Date().getTime();

    var distance = countDownDate - now;

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //SHOW ANNOUCEMENT PROUCT IS ON BIDDING
    if(countDownStartDate <= now && now <= countDownEndDate){
      document.getElementById("bidding-annoucement" + product.product_id + product.product_name).innerHTML = "Product is on bidding";
    }

    if (
      document.getElementById(
        "slider3" + product.product_id + product.product_name
      ) == null
    )
      return;
    if (
      document.getElementById(
        "slider3" + product.product_id + product.product_name
      ) == null ||
      distance < 0
    ) {
      clearInterval(slider3);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
    document.getElementById(
      "slider3" + product.product_id + product.product_name
    ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
  return (
    <div className="product-grid">
      <div className="product-item-countdownstart-wrapper">
        <span className="product-item-countdownstart-headtext">Auction Start Date: </span>
        <span className="product-item-countdownstart-time">{product.product_start_aution_day}</span>
      </div>

      <div className="product-item-countdownend-wrapper">
        <span className="product-item-countdownend-headtext">Timed out: </span>
        <span id={"slider3" + product.product_id + product.product_name} className="product-item-countdownend"></span>
      </div>

      <Link
        to={`/${product.category_id}/${product.product_name}`}
        replace
        className="product-img"
      >
        <img
          name={product.product_id}
          src={
            "http://localhost:8000/ProductImg/" +
            product.product_thumbnail_img_name
          }
        />
      </Link>

      <div replace className="product-item-categoryname">
        <Link to={`/category/${product.category_name}`}>{product.category_name.replace(/-/g, " ")}</Link>
      </div>

      <div className="product-name">
        <Link
          to={`/${product.category_id}/${product.product_name}`}
          name={product.product_id}
          replace
          className="product-name-item"
        >
          {product.product_name.replace(/-/g, " ")}
        </Link>
      </div>
      <div className="product-metapane-wrapper">
        <div className="product-price">
          <span className="product-price-headtext">Start Price:</span>
          <span className="product-price-value">
            ${parseInt(product.product_start_price).toLocaleString()}
          </span>
        </div>

        <div className="cart-icons">
          <div id={"bidding-annoucement" + product.product_id + product.product_name} className="bidding-annoucement"></div>
          <Link to={`/${product.category_id}/${product.product_name}`} className="btn-view">View Bidding</Link>
        </div>

      </div>
    </div>
  );
};

export default SliderItem3;

import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import $ from "jquery";

const SliderItem1 = ({ product, updateComingProducts }) => {
  const onProductClicked = (e) => {
    $("#data").data("productid", e.target.name);
  };

  //COUNTDOWN
  var countDownDate = new Date(product.product_start_aution_day).getTime();

  var slider1 = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (
      document.getElementById(
        "slider1" + product.product_id + product.product_name
      ) == null
    )
      return;
    if (
      document.getElementById(
        "slider1" + product.product_id + product.product_name
      ) == null ||
      distance <= 0
    ) {
      clearInterval(slider1);
      document.getElementById(
        "slider1" + product.product_id + product.product_name
      ).innerHTML = "JUST OPEN";
      updateComingProducts();
    }
    document.getElementById(
      "slider1" + product.product_id + product.product_name
    ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

  return (
    <div className="product-grid">
      <div className="product-item-countdownstart-wrapper">
        <span className="product-item-countdownstart-headtext">Auction Start Date: </span>
        <span className="product-item-countdownstart-time">{product.product_start_aution_day}</span>
      </div>

      <div className="product-item-countdownend-wrapper">
        <span className="product-item-countdownend-headtext">Start In: </span>
        <span id={"slider1" + product.product_id + product.product_name} className="product-item-countdownend"></span>
      </div>

      <Link
        to={`/${product.category_id}/${product.product_name}`}
        replace
        className="product-img"
        onClick={onProductClicked}
      >
        <img
          name={product.product_id}
          src={
            "http://localhost:8000/ProductImg/" +
            product.product_thumbnail_img_name
          }
        />
      </Link>
      
      <div className="product-item-categoryname">
        <Link to={`/category/${product.category_name}`}>{product.category_name.replace(/-/g, " ")}</Link>
      </div>

      <div className="product-name">
        <Link
          to={`/${product.category_id}/${product.product_name}`}
          name={product.product_id}
          replace
          className="product-name-item"
          onClick={onProductClicked}
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

export default SliderItem1;

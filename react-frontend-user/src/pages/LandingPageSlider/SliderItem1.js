import React from "react";
import { Link } from "react-router-dom";
import {  FaHeart } from "react-icons/fa";
import $ from "jquery";

const SliderItem1 = ({ product }) => {
  const onProductClicked = (e) => {
    $("#data").data("productid", e.target.name);
  };
  
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (document.getElementById('slider1' + product.product_id + product.product_name) == null) return;
  if (document.getElementById('slider1' + product.product_id + product.product_name) == null || distance < 0){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (document.getElementById('slider2' + product.product_id + product.product_name) == null) return;
  if (document.getElementById('slider2' + product.product_id + product.product_name) == null || distance < 0){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <div className="product-grid">
      <div id={product.product_id + product.product_name}></div>
      <div>
        <Link
          to={`/${product.category_id}/${product.product_name.replace(/-/g, " ")}`}
          replace
          className="product-img"
          onClick={onProductClicked}
        >
          <img name={product.product_id}
            src={require(`../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
            />
        </Link>
      </div>
      <div className="category-name">
        {product.category_name}
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
          <span className="product-price-value">${parseInt(product.product_start_price).toLocaleString()}</span>
        </div>

        <div className="cart-icons">
          <FaHeart className="meta-wishlist" style={{ cursor: "pointer" }} />
          <Link to="#" className="btn-view">View</Link>
        </div>
      </div>
      
    </div>
  );
};

export default SliderItem1;

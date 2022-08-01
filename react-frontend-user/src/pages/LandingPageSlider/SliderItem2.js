import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import $ from "jquery";

const SliderItem2 = ({ product }) => {
  const onProductClicked = (e) => {
    $("#data").data("productid", e.target.name);
  };
  
  var upComing = product.product_end_aution_day ;
  
  var countDownDate = new Date(product.product_end_aution_day).getTime();

  var slider2 = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById('slider2' + product.product_id + product.product_name) == null) return;
    if (document.getElementById('slider2' + product.product_id + product.product_name) == null || distance < 0){
      clearInterval(slider2);
      document.getElementById('slider2' + product.product_id + product.product_name).innerHTML = "EXPIRED";
    }
    document.getElementById('slider2' + product.product_id + product.product_name).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";}, 1000);

  return (
    <div className="product-grid">
      <div id={'slider2'+ product.product_id + product.product_name}></div>
      <Link
        to={`/${product.category_id}/${product.product_name}`}
        replace
        className="product-img"
        onClick={onProductClicked}
      >
        <img name={product.product_id}
          src={require(`../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
          />
      </Link>

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
          <Link to={`/${product.category_id}/${product.product_name}`} className="btn-view">View</Link>
        </div>
      </div>
      
    </div>
  );
};

export default SliderItem2;

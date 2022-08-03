import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

const ProductItem = ({ product }) => {
  //COUNTDOWN
  var productEndDate = product.product_end_aution_day + " " + "00:00:00";

  var countDownDate = new Date(new Date(productEndDate).toLocaleString()).getTime();
  var productNow = setInterval(function() {
    var now = new Date(new Date().toLocaleString()).getTime();
  
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("product-item" + product.product_id + product.product_name) == null) return;
    if (distance <= 0){
      clearInterval(productNow);

      //SENT PRODUCT_ID WHICH EXPIRED
      document.getElementById("product-item" + product.product_id + product.product_name).innerHTML = "EXPIRED";

      var product_id = product.product_id;
      var product_status = 2;

      axios
        .post("http://127.0.0.1:8000/api/changeproductstatus", {product_id, product_status})
        .then(function (response) {
          console.log(response.data)
            });
        return;
    }

    document.getElementById("product-item" + product.product_id + product.product_name).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";}, 1000);

    
  return (
    <div className="product-grid">
      <div id={"product-item" + product.product_id + product.product_name} className="product-item-countdown"> </div>
        <Link
          to={`/${product.category_id}/${product.product_name}`}
          replace
          className="product-img"
        >
          <img name={product.product_id}
            src={require(`../../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
            />
        </Link>

      <div className="product-name">
        <Link to={`/${product.category_id}/${product.product_name}`} name={product.product_id} replace>
          {product.product_name.replace(/-/g, " ")}
        </Link>
      </div>
      <div className="product-metapane-wrapper">
        <div className="product-price">
          <span className="product-price-headtext">Start Price:</span>
          <span className="product-price-value">${parseInt(product.product_start_price).toLocaleString()}</span>
        </div>

        <div className="cart-icons">
          <Link to={`/${product.category_id}/${product.product_name}`} className="btn-view">View Bidding</Link>
        </div>
      </div>
      
    </div>
  );
};

export default ProductItem;

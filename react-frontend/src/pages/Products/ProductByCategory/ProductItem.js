import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import $ from "jquery";

const ProductItem = ({ product }) => {
  const onProductClicked = (e) => {
    $("#data").data("productid", e.target.name);
  };

  //countdown test 
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("progressBar").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("progressBar").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div className="product-grid">
      <div type="text" id="progressBar" style={{ marginLeft: "100px" }}></div>

      <div>
        <Link
          to={`/${product.category_name}/${product.product_name}`}
          replace
          className="product-name-item"
          onClick={onProductClicked}
        >
          <img
            className="product-item-content product-img"
            name={product.product_id}
            src={require(`../../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
          />
        </Link>
      </div>

      <div className="category-name">
        {product.category_name.replace(/-/g, " ")}
      </div>

      <div className="product-name">
        <Link
          to={`/${product.category_name}/${product.product_name}`}
          name={product.product_id}
          replace
          className="product-name-item"
          onClick={onProductClicked}
        >
          {product.product_name.replace(/-/g, " ")}
        </Link>
      </div>

      <div className="product-price">
        {parseInt(product.product_price_per_unit).toLocaleString()}đ
      </div>

      <div className="cart-icons">
        <FaShoppingCart
          className="meta-cart"
          style={{ cursor: "pointer" }}
          // onClick={()=> {this.props.addProductToCart(product,1)}}
        />
        <FaHeart className="meta-wishlist" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default ProductItem;

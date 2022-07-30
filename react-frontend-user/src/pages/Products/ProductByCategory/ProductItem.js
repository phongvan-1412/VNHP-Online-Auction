import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import $ from "jquery";

const ProductItem = ({ product }) => {

  const onProductClicked = (e) => {
    $("#data").data("productid", e.target.name);
  };
  
  return (
    <div className="product-grid">
      <div>
        <Link
          to={`/${product.category_id}/${product.product_name}`}
          replace
          className="product-img"
          onClick={onProductClicked}
        >
          <img name={product.product_id}
            src={require(`../../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
            />
        </Link>
      </div>

      {/* <div className="category-name">
        {product.category_id}
      </div> */}

      <div className="product-name">
        <Link
          to={`/${product.category_id}/${product.product_name}`}
          name={product.product_id}
          replace
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

export default ProductItem;

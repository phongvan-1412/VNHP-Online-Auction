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
          to={`/${product.category_name}/${product.product_name}`}
          replace
          className="product-name-item"
          onClick={onProductClicked}
        >
          <img
            className="product-item-content product-img"
            name={product.product_id}
            // src={require(`../../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
          />
        </Link>
      </div>

      <div className="category-name">
        {product.category_name}
      </div>

      <div className="product-name">
        <Link
          to={`/${product.category_name}/${product.product_name}`}
          name={product.product_id}
          replace
          className="product-name-item"
          onClick={onProductClicked}
        >
          {product.product_name}
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

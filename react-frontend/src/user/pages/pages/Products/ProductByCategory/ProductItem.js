import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import { connect } from "react-redux";
import { addProductToCart } from "../../../../redux/actions/cartAction";

class ProductItem extends Component {

  render() {
    const { product } = this.props;
    
    return (
      
      <div className="col-lg-3 col-md-4 col-sm-6">
        <form onSubmit={this.onSubmit}>
          <div>
            <Link
              to={`/${product.category_name}/${product.product_name}`}
              replace
              className="product-name-item"
            >
              <img
                className="product-item-content product-img"
                src={require(`../../../../../../LaravelAPI/public/ProductImage/${product.product_img_name}`)}
              />
            </Link>
          </div>

          <div className="category-name">
            {product.category_name.replace(/-/g, " ")}
          </div>

          <div className="product-name">
            <Link
              to={`/${product.category_name}/${product.product_name}`}
              replace
              className="product-name-item"
            >
              {product.product_name.replace(/-/g, " ")}
            </Link>
          </div>

          <div className="product-price">{product.product_price_per_unit}đ</div>

          <div className="cart-icons">
            <FaShoppingCart
              className="meta-cart"
              style={{ cursor: "pointer" }}
              onClick={()=> {this.props.addProductToCart(product,1)}}
            />
            <FaHeart className="meta-wishlist" style={{ cursor: "pointer" }} />
          </div>
        </form>
      </div>
    );
  }
}
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default connect(null, { addProductToCart })(ProductItem);

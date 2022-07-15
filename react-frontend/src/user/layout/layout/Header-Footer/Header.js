import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

import "../../css/style-mobile.css";
import "../../css/style-tablet.css";
import "../../css/style-laptop.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Dropdown from "../DropdownNavBar/Dropdown";
import QuickViewCartItems from "../../pages/Cart/QuickViewCartItems";

function Header({ cart, categories, categoriesRoot, updateCart }) {
  const [drop, setDrop] = useState(false);
  const [cartMini, setCartMini] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartTotalPayment, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchCategories = () => {
      let totalPayment = 0;
      let count = 0;
      cart.forEach((item) => {
        totalPayment += parseInt(item.product_quantity * item.product_price_per_unit);
        count += parseInt(item.product_quantity);
      });
      setItemsCount(count);
      setCartTotal(totalPayment);
    };

    fetchCategories();
  });

  return (
    <div>
      <div className="header-menu">
        <header className="menu">
          <Link to="/" replace>
            <img src={require("../../img/Header/logo.jpg")} className="logo" />
          </Link>
          <Link to="/about" replace className="about">
            About
          </Link>
          {/* <Link to="/blog" replace className="blog">
              Blog
            </Link> */}
          <Link to="/contactus" replace className="contact">
            Contact
          </Link>
          <Link
            to="#"
            replace
            className="product"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
            style={{ height: "100px" }}
          >
            <p style={{ marginTop: "30px" }}>Product</p>
            {drop && (
              <Dropdown
                categoriesRoot={categoriesRoot}
                categories={categories}
              />
            )}
          </Link>
          <div
            className="nav-bag"
            style={{ height: "100px", marginTop: "50px" }}
            onMouseEnter={() => setCartMini(true)}
            onMouseLeave={() => setCartMini(false)}
          >
            <AiOutlineShoppingCart />
            <span>Shoping Cart</span>
            <br />
            <span className="bag-quantity">
              {itemsCount} items - {cartTotalPayment}
            </span>
            {cartMini && (
              <QuickViewCartItems cart={cart} updateCart={updateCart} />
            )}
          </div>

          <Link to="/shipping" replace className="shipping">
            Shipping
          </Link>
          <Link to="/needhelp" replace className="needhelp">
            Needhelp
          </Link>
          <Link to="/register" replace className="register">
            Register
          </Link>
          <Link to="/login" replace className="login">
            Login
          </Link>
          <Link to="/" className="meta-facebook">
            <FaFacebook />
          </Link>
          <Link to="/" className="meta-instagram">
            <FaInstagramSquare />
          </Link>
          <Link to="/" className="meta-twitter">
            <FaTwitter />
          </Link>
          <Link to="/" className="btn-bars">
            <FaBars />
          </Link>
        </header>
      </div>
    </div>
  );
}

export default Header;

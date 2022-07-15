import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import QuickViewCartItem from "./QuickViewCartItem";
import { submitCart } from "../../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { FaSyncAlt } from "react-icons/fa";
const QuickViewCartItems = ({ cart, updateCart }) => {
  let totalPayment = 0;
  cart.forEach((item) => {
    totalPayment += parseInt(
      item.product_quantity * item.product_price_per_unit
    );
  });

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(submitCart(cart));
  };

  return (
    <div
      style={{
        background: "white",
        width: "500px",
        position: "absolute",
        marginTop: "25px",
      }}
    >
      <div>
        <h3 style={{ marginLeft: "10px" }}>
          <b>YOUR PRODUCT</b>
        </h3>
        <h3 style={{ float: "right", marginTop: "-40px", marginRight: "10px" }}>
          <b>PRICE</b>
        </h3>
        <hr />
      </div>
      <div>
        <div style={{ height: "200px", overflowY: "scroll" }}>
          {cart.map((item) => (
            <QuickViewCartItem
              key={item.product_SKU}
              product={item}
              updateCart={updateCart}
            ></QuickViewCartItem>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <div className="row">
          <div className="col-6" style={{ marginLeft: "10px" }}>
            <h5>
              <b>CART SUBTOTAL: </b>
            </h5>
          </div>
          <div className="col-4">
            <h5 style={{ float: "right", marginRight: "15px" }}>
              {totalPayment.toLocaleString()}đ
            </h5>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <div className="row">
          <div className="col-12" >
            <button style={{background:'black',width:'450px', height: "50px",marginLeft:'15px',fontSize:'20px' }}>
              <Link to="/cart" replace >
                View Cart
              </Link>
            </button>
          </div>
          <div className="col-12" >
            <button style={{background:'#007a65',width:'450px', height: "50px",marginLeft:'15px',marginTop:'10px',marginBottom:'10px',fontSize:'20px',color:'white' }} onClick={onClick}>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewCartItems;

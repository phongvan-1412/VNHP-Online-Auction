import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

import Dropdown from "./DropdownNavBar/Dropdown";

const Header = ({ userinfo, categories }) => {

  var showTime = setInterval(function () {
    var date = new Date().toLocaleDateString('en-ZA');
    var time = new Date().toLocaleTimeString();
    var myElement = date + " " + time;
    if (document.getElementById("showtime") == null) {
      clearInterval(myElement);
    }
      document.getElementById("showtime").innerHTML = myElement;
  }, 1000);

  let checkUser = false;
  let userName = "";
  let customer = {};

  const isUserLogin = () => {
    if (localStorage.getItem("customer_info") == null) return;
    else {
      customer = JSON.parse(localStorage.getItem("customer_info"));
      checkUser = true;
      userName = customer.customer_name;
    }
  };
  isUserLogin();

  const buttonLogOutClick = () => {
    const customer_id = customer.customer_id;
    axios
      .post(`http://127.0.0.1:8000/api/customerlogout`, { customer_id })
      .then(function (response) {
        if (response.data > 0) {
          localStorage.removeItem("customer_info");
          window.location.href = "http://localhost:3000/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="header-menu"
      style={{
        height: "100px",
        justifyContent: "space-evenly",
      }}
    >
      <header className="menu">
        <Link
          to="/"
          className="icon-text"
          style={{ margin: "0px", padding: "0px" }}
          replace
        >
          <span id="showtime"></span>
          <span className="icon-split-text" data-text="VNHP">VNHP</span>
          <span className="icon-footer-text">@ONLINE AUCTION</span>
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

        {/* <Link to="#" replace className="needhelp">
          Needhelp
        </Link> */}

        <Link to="#" className="product" replace>
          Product
          <div id="services-submenu-wraper" style={{ height: "50px" }}>
            <div className="services-submenu">
              <Dropdown categories={categories} />
            </div>
          </div>
        </Link>

        {checkUser ? (
          <div>
            <Link to="/userprofile" className="userprofile" replace style={{marginRight:"70px"}}>
              {userName}
            </Link>

            <Link to="/" replace className="logout" onClick={buttonLogOutClick}>
              Log Out
            </Link>
          </div>
        ) : (
          <div>
              <Link to="/login" replace className="login" style={{marginRight:"70px"}}>
                Login
              </Link>
              <Link to="/register" replace className="register-link">
                Register
              </Link>
          </div>
        )}
      </header>
    </div>
  );
};
export default Header;

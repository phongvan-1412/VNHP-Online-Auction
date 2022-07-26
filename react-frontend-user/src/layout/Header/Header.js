import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Dropdown from "./DropdownNavBar/Dropdown";

const Header = ({categories}) => {
  const buttonLogOutClick = () => {
    localStorage.removeItem("customer_info");
    window.location.href = "http://localhost:3000/";
  };

  let checkUser = false;
  let userName = "";
  const isUserLogin = () => {
    let tmp = {};

    if (localStorage.getItem("customer_info") != null) {
      JSON.parse(localStorage.getItem("customer_info")).map((user) => {
        tmp = user;
      });
      checkUser = true;
      userName = tmp.customer_name;
    }
  };
  isUserLogin();

  return (
    <div
      className="header-menu"
      style={{
        height: "100px",
        justifyContent: "space-evenly",
      }}
    >
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

        {/* <Link to="#" replace className="needhelp">
          Needhelp
        </Link> */}
        <div
          style={{ height: "100px", marginTop: "77px"}}
          className="product "
        >
          <Link to="#" id="menu-dropdown" replace>
            Product
            <div className="services-submenu" style={{ position: "absolute" }}>
              <Dropdown categories={categories}/>
            </div>
          </Link>
        </div>

        {checkUser ? (
          <div>
            <Link to="/userprofile" replace className="userprofile">
              {userName}
            </Link>

            <Link to="/" replace onClick={buttonLogOutClick}>
              Log Out
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" replace className="login">
              Login
            </Link>

            <Link to="/register" replace className="register">
              Register
            </Link>
          </div>
        )}

        <a href="https://www.facebook.com/" className="meta-facebook">
          <FaFacebook />
        </a>
        
        <a href="https://www.instagram.com/?hl=en" className="meta-instagram">
          <FaInstagramSquare />
        </a>

        <a href="https://twitter.com/" className="meta-twitter">
          <FaTwitter />
        </a>
      </header>
    </div>
  );
};
export default Header;

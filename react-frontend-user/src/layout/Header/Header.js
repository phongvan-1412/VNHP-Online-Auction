import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Dropdown from "./DropdownNavBar/Dropdown";

class Header extends Component {
  state = {
    drop: false,
  };

  render() {
    const { categories} = this.props;
    return (
      <div
        className="header-menu"
        style={{
          height: "100px",
          display: "flex",
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
            style={{ height: "100px", marginTop: "77px" }}
            className="product"
            onMouseEnter={() => this.setState({ drop: true })}
            onMouseLeave={() => this.setState({ drop: false })}
          >
            <Link to="#" replace>
              Product
              <div>
                {this.state.drop ? (
                    <Dropdown
                      categories={categories}
                    />
                  ) : null}
              </div>
            </Link>
          </div>

          <Link to="/login" replace className="login">
            Login
          </Link>

          <Link to="/login" replace className="register">
            Register
          </Link>

          {/* {isCustomerLogin ? (
              <Link to="/customer" replace className="customer">
                Customer
              </Link>
            ) : (
              <div>
                <a href="http://127.0.0.1:8000/register">Register</a>
                <a href="http://127.0.0.1:8000/login">Login</a>
              </div>
            )} */}

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
  }
}
export default Header;

import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      cssEase: "ease",
      easing: "linear",
    };

    let checkValidEmail = 0;
    const validateEmail = () => {
      const $result = $("#emailResult");
      const customer_email = $("#email").val();
      const checkEmail = { customer_email };
      $result.text("");

      axios
        .post(`http://127.0.0.1:8000/api/isemailexists`, checkEmail)
        .then(function (response) {
          if (response.data > 0) {
            $result.text(customer_email + " is valid.");
            $result.css("color", "green");
          } else {
            $result.text(customer_email + " is not valid email.");
            $result.css("color", "red");
          }

          checkValidEmail = response.data;
          buttonLoginSetter();
        });
    };

    const buttonLoginSetter = () => {
      if (checkValidEmail) {
        $("#btn-login").prop("disabled", false);
      } else {
        $("#btn-login").prop("disabled", true);
      }
    };

    const buttonLoginOnClick = () => {
      const customer_email = $("#email").val();
      const customer_pwd = $("#password").val();
      const customer = { customer_email, customer_pwd };

      axios
        .post(`http://127.0.0.1:8000/api/customerlogin`, customer)
        .then((response) => {
          if (response.data.length < 1) {
            const $result = $("#loginResult");
            $result.text("Wrong password.");
            $result.css("color", "red");
          } else {
            localStorage.setItem(
              "customer_info",
              JSON.stringify(response.data)
            );
            window.location.href = "http://localhost:3000/";
          }
        });
    };

    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4 login-form">
          <div className="login-form-group">
            <label htmlFor="exampleInputEmail1" className="">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              onBlur={validateEmail}
            />
            <div id="emailResult"></div>
          </div>
          <div className="login-form-group">
            <label htmlFor="exampleInputPassword1" className="">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
            <div id="loginResult"></div>
          </div>

          <div className="row login-form-group">
            <div className="col-md-8 link-group">
              <p>
                <Link to="/forgetpassword" className="login-link" replace>
                  Forgot password
                </Link>
              </p>
              <br />
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="login-link" replace>
                  Sign up.
                </Link>
              </p>
            </div>
            <div className="col-md-4 pt-1">
              <button
                type="submit"
                className="btn btn-primary float-right"
                id="btn-login"
                onClick={buttonLoginOnClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 pt-3">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <img
              className="page-content row-panel-img"
              src={require(`../../img/Footer/image-1.jpg`)}
            />
            <img
              className="page-content row-panel-img"
              src={require(`../../img/Footer/image-2.jpg`)}
            />
            <img
              className="page-content row-panel-img"
              src={require(`../../img/Footer/image-3.jpg`)}
            />
          </Slider>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}
export default Login;

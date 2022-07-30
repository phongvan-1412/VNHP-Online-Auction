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
    const { customerLogin } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
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
        .post("http://127.0.0.1:8000/api/isemailexists", checkEmail)
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

    function showTime() {
      window.location.href = "http://localhost:3000";
    }
    const buttonLoginOnClick = () => {
      if (!$("#email").val() == true || !$("#password").val() == true) {
        $("#emailResult").text("Please enter your email");
        $("#emailResult").css("color", "red");

        $("#loginResult").text("Please enter your pasword");
        $("#loginResult").css("color", "red");
        return;
      }
      const customer_email = $("#email").val();
      const customer_pwd = $("#password").val();
      const $result = $("#loginResult");

      const customer = { customer_email, customer_pwd };

      axios
        .post(`http://127.0.0.1:8000/api/customerlogin`, customer)
        .then((response) => {
          if (response.data == 2) {
            $result.text("Please check your validate email.");
            $result.css("color", "red");
          } else if (response.data == 0) {
            $result.text("Please check your pasword");
            $result.css("color", "red");
          } else {
            $result.text("Login successfully. Redirect to Home");
            $result.css("color", "green");
            localStorage.setItem(
              "customer_info",
              JSON.stringify(response.data)
            );
            customerLogin();
            setInterval(showTime, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const checkPassword = () => {
      const $result = $("#loginResult");

      if (!$("#password").val()) {
        $result.text("Please enter your pasword.");
        $result.css("color", "red");
      } else if ($("#password").val().length < 6) {
        $result.text("Password too short.");
        $result.css("color", "red");
      } else {
        $result.text("");
      }
    };
    return (
      <div className="row">
        <div className="col-xl-2 col-lg-2"></div>
        <div className="col-xl-4 col-lg-4 col-md-6 card login-form">
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
            <div
              id="emailResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>
          <div className="login-form-group">
            <label htmlFor="exampleInputPassword1" className="">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onBlur={checkPassword}
            />
            <div
              id="loginResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>

          <div className="row login-form-group">
            <div className="col-md-8 link-group">
              <p>
                <Link to="/forgetpassword" className="login-link" replace>
                  Forgot password
                </Link>
              </p>
              <br />
              <p id="dont-have-account">
                Don't have an account?{" "}
                <Link to="/register" className="login-link" replace>
                  Sign up.
                </Link>
              </p>
            </div>
            <div className="col-md-4 pt-1 btn-login-group">
              <button
                type="submit"
                className="btn float-right"
                id="btn-login"
                onClick={buttonLoginOnClick}
              >
                <b>LOGIN</b> 
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 pt-3">
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
      </div>
    );
  }
}
export default Login;

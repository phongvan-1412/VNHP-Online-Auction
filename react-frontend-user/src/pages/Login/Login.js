import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4 login-form">
          <div className="login-form-group">
            <label htmlFor="exampleInputEmail1" className="">
              Email
            </label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="login-form-group">
            <label htmlFor="exampleInputPassword1" className="">
              Password
            </label>
            <input type="password" className="form-control" name="pwd" />
          </div>

          <div className="row login-form-group">
            <div className="col-md-8 link-group">
              <p >
                <Link to="/forgetpassword" className="login-link" replace>
                  Forgot password
                </Link>
              </p>
              <br />
              <p >
                Don't have an account?{" "}
                <Link to="/register"  className="login-link"replace>
                  Sign up.
                </Link>
              </p>
            </div>
            <div className="col-md-4 pt-1">
              <button type="submit" className="btn btn-primary float-right">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
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

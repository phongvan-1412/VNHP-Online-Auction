import React, { Component } from "react";
import Slider from "react-slick";

class UserLogin extends Component {
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
        <div className="col-4">
          <div class="form-group">
            <label for="exampleInputEmail1" class="text-uppercase">
              Email
            </label>
            <input type="text" class="form-control" name="email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="text-uppercase">
              Password
            </label>
            <input type="password" class="form-control" name="pwd" />
          </div>

          <div class="row">
            <div class="col-md-8">
              <span>
                <a href="{{route('forgetpass')}}">Forgot password</a>
              </span>{" "}
              <br />
              <span>
                Don't have an account? <a href="/register">Sign up.</a>{" "}
              </span>
            </div>
            <div class="col-md-4 pt-1">
              <button type="submit" class="btn btn-primary float-right ">
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
export default UserLogin;

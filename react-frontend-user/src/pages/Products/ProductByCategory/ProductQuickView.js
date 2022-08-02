import React, { Component, useRef } from "react";
import Slider from "react-slick";
import ProductQuickViewDetails from "./ProductQuickViewDetails";
function ProductQuickView({ product }) {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //COUNTDOWN
  // var productEndDate = product.product_end_aution_day ;

  // var countDownDate = new Date("product.product_end_aution_day").getTime();
  var countDownDate = new Date(
    new Date("8/2/2022, 11:26:00 PM").toLocaleString()
  ).getTime();

  var productNow = setInterval(function () {
    var now = new Date(new Date().toLocaleString()).getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (
      document.getElementById(product.product_id + product.product_name) == null
    )
      return;
    if (distance <= 0) {
      clearInterval(productNow);
      document.getElementById(
        product.product_id + product.product_name
      ).innerHTML = "EXPIRED";

      var countdownProduct = product.product_id;
      var countdownCustomer = JSON.parse(
        localStorage.getItem("customer_info")
      ).customer_id;
      // console.log(countdownCustomer)

      var days = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
      axios
        .post("http://127.0.0.1:8000/api/countdownend", {
          countdownProduct,
          countdownCustomer,
        })
        .then(function (response) {
          console.log(response.data);
          // if (response.data.length > 0) {
          //     result.text("Successful.");
          //     result.css("color", "green");
          // } else {
          //     result.text("Failed.");
          //     result.css("color", "red");
          // }
        });
    }
    document.getElementById(
      product.product_id + product.product_name
    ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

  const productImages = {
    img1: product.product_img_name1,
    img2: product.product_img_name2,
    img3: product.product_img_name3,
  };

  return (
    <div
      className="modal fade"
      id="productQuickView"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="card col-4">
                  <div>
                    <img
                      id="product-quick-view-img"
                      src={require(`../../../../../LaravelAPI/public/ProductImg/${product.product_thumbnail_img_name}`)}
                    />
                  </div>
                  <div>
                    <Slider ref={ref} {...settings}>
                      <img
                        id="product-quick-view-sub-img"
                        src={require(`../../../../../LaravelAPI/public/ProductImg/${productImages.img1}`)}
                      />
                      <img
                        id="product-quick-view-sub-img"
                        src={require(`../../../../../LaravelAPI/public/ProductImg/${productImages.img2}`)}
                      />
                      <img
                        id="product-quick-view-sub-img"
                        src={require(`../../../../../LaravelAPI/public/ProductImg/${productImages.img3}`)}
                      />
                    </Slider>
                  </div>
                </div>
                <div className="card col-8">
                  <div id={product.product_id + product.product_name}>countdown</div>
                  <div>{product.product_name.replace(/-/g, " ")}</div>
                  <div>{product.product_start_price}</div>
                  <div>{product.product_price_aution}</div>
                  <ProductQuickViewDetails product={product}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductQuickView;

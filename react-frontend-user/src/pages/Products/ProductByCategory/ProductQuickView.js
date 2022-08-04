import React, { Component, useRef } from "react";
import Slider from "react-slick";
import ProductQuickViewDetails from "./ProductQuickViewDetails";

function ProductQuickView({ product }) {
  console.log(product)
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed :2000,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //COUNTDOWN
  var productStartDate = product.product_start_aution_day + " " + "00:00:00";

  var countDownDate = new Date(new Date(productStartDate).toLocaleString()).getTime();
 
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

    }
    document.getElementById(product.product_id + product.product_name
    ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

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
                      {/* <img
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
                      /> */}
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

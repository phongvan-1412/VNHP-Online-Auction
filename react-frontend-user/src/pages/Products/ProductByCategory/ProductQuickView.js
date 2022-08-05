import React, { Component, useRef } from "react";
import Slider from "react-slick";
import ProductQuickViewDetails from "./ProductQuickViewDetails";

const ProductQuickView = ({ product }) =>{
  // console.log(product)
  const currentProducts = [];
  // product.forEach((productItem) => {
  //   currentProducts = [...currentProducts, product];
  //   }
  // });
  const ref = useRef({});

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
  var countDownDate = new Date(new Date(product.product_end_aution_day).toLocaleString()).getTime();
 
  var productQuickView = setInterval(function () {
    var now = new Date(new Date().toLocaleString()).getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (
      document.getElementById("quickview" + product.product_id + product.product_name) == null
    )
      return;
    if (distance <= 0) {
      clearInterval(productQuickView);
      document.getElementById("quickview" + product.product_id + product.product_name).innerHTML = "EXPIRED";

    }
    document.getElementById("quickview" + product.product_id + product.product_name).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
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
                {product.product_name.replace(/-/g, " ")}
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
                        src={
                          "http://localhost:8000/ProductImg/" +
                          product.product_thumbnail_img_name
                        }
                      />
                    </div>
                    <div>
                      <Slider ref={ref} {...settings}>
                        <img
                          id="product-quick-view-sub-img"
                          src={"http://localhost:8000/ProductImg/" + product.product_img_name1}
                          
                        />
                        <img
                          id="product-quick-view-sub-img"
                          src={"http://localhost:8000/ProductImg/" + product.product_img_name2}
                        />
                        <img
                          id="product-quick-view-sub-img"
                          src={"http://localhost:8000/ProductImg/" + product.product_img_name3}
                        />
                      </Slider>
                    </div>
                  </div>
                  <div className="card col-8">
                    <div id={"quickview" + product.product_id + product.product_name} className="quickview-countdown"></div>
                    <div className="product-price">
                      <span className="product-price-headtext">Start Price:</span>
                      <span className="product-price-value">${parseInt(product.product_start_price).toLocaleString()}</span>
                    </div>
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

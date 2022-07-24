import React, { useRef } from "react";
import Slider from "react-slick";
import $ from "jquery";
import { Link } from "react-router-dom";

import { GiNextButton, GiPreviousButton } from "react-icons/gi";

const LandingPageSlider1 = () => {
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
    slidesToShow: 5,
    slidesToScroll: 5,
    vertical:false,
    horizontal: true
  };

  const slideItems = (
    <div className=" landingpage-slider slide-title">
      <div className="slide-title top-content">
        <h4>
          <b>UP COMING PRODUCTS</b>
        </h4>
      </div>

      <Slider ref={ref} {...settings} >
        <div id="product-grid-wrapper">
          {/* <div id="product-grid">
            <Link to="#" id="product-image"></Link>
            <div id="category-name"></div>
            <div id="product-name"></div>
            <Link to="#" id="product-price"></Link>
          </div> */}

          <div className="cart-icons">
          <i
            className="fa-solid fa-shopping-cart meta-cart"
            style={{ cursor: "pointer" }}
            // onClick={()=> {this.props.addProductToCart(product,1)}}
          />
        </div>
        </div>
      </Slider>

      <div className="btn-click">
        <button type="button" className="btn-previous" onClick={previous}>
          <GiPreviousButton />
        </button>
        <button type="button" className=" btn-next" onClick={next}>
          <GiNextButton />
        </button>
      </div>
    </div>
  );
  function getData() {
    fetch("http://127.0.0.1:8000/api/selectallproducts", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        res.map((products) => {
          const tmp = document.createElement("div");
            tmp.id = "product-grid" + products.product_id;
          
          const tmp_img = document.createElement("a");
            tmp_img.innerHTML = products.product_thumbnail_img_name;
            tmp_img.id = "product-image";
            $("#product-grid" + products.product_id).append(tmp_img);

          const tmp_categoryname = document.createElement("div");
            tmp_categoryname.innerHTML = products.category_id;
            tmp_categoryname.className = "category-name";
            $("#product-grid" + products.product_id).append(tmp_categoryname);

          const tmp_productname = document.createElement("div");
            tmp_productname.innerHTML = products.product_name.replace(/-/g, " ");
            tmp_productname.className = "product-name";
            $("#product-grid" + products.product_id).append(tmp_productname);

          const tmp_producprice = document.createElement("a");
            tmp_producprice.innerHTML = products.product_start_price;
            tmp_producprice.className = "product-price";
            $("#product-grid" + products.product_id).append(tmp_producprice);

          const tmp_icon = document.createElement("a");
            tmp_icon.className = "fa-solid fa-shopping-cart meta-cart";
            $("#product-grid" + products.product_id).append(tmp_icon);

          $("#product-grid-wrapper").append(tmp);
        });
      });
  }
  getData();

  return slideItems;
};

export default LandingPageSlider1;

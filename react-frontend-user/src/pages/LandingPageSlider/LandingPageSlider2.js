import $ from "jquery";
import { Link } from "react-router-dom";
import React, { Component, useState, useRef } from "react";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
class LandingPageSlider2 extends Component  {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      products: [],
    };
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/selectallproducts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ products: response });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed :3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    };
  return (
    <div className=" landingpage-slider slide-title">
      <div className="slide-title top-content">
        <h4>
          <b>FRESH FOOD</b>
        </h4>
        {/* <button value={1} name="Fruit" className={ horizontalState == 1 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Fruit</button> */}
        {/* <button value={2} name="Meat" className={ horizontalState == 2 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Meat</button> */}
      </div>

      <Slider  {...settings}>
        {this.state.products.map((product) => (
           <ProductItem 
           key={product.product_SKU}
           product={product}
         ></ProductItem>
        ))}
      </Slider>
      
      <div className="btn-click">
        <button type="button" className="btn-previous" onClick={this.previous}>
          <GiPreviousButton />
        </button>
        <button type="button" className=" btn-next" onClick={this.next}>
          <GiNextButton />
        </button>
      </div>
    </div>
);
        }
  // const slideItems = (
  //   <div className=" landingpage-slider slide-title">
  //     <div className="landingpage-slider slide-title top-content">
  //       <h4>
  //         <b>HURRY UP</b>
  //       </h4>
  //     </div>

  //     <div id="product-grid-wrapper2">
        
  //     </div>


  //     {/* <div className="btn-click">
  //       <button type="button" className="btn-previous">
  //         <GiPreviousButton />
  //       </button>
  //       <button type="button" className=" btn-next">
  //         <GiNextButton />
  //       </button>
  //     </div> */}
  //   </div>
  // );

  // function getData() {
  //   fetch("http://127.0.0.1:8000/api/selectallproducts", { method: "GET" })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       res.map((products) => {
  //           var hurry_auction = products.product_end_aution_day + " " + "5:00:00";
  //           var countDownDate = new Date(hurry_auction).getTime();
  //               var slider2 = setInterval(function() {
  //                 var now = new Date().getTime();
  //                 var distance = countDownDate - now;
              
  //                 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //                 var hours = Math.floor(
  //                   (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //                 );
  //                 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //                 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //                 if (
  //                   document.getElementById('slider2' + products.product_id + products.product_name) == null
  //                 )
  //                   return;
  //                 if (
  //                   document.getElementById('slider2' + products.product_id + products.product_name) ==
  //                     null ||
  //                   distance < 0
  //                 ) {
  //                   clearInterval(slider2);
  //                   document.getElementById('slider2' +
  //                     products.product_id + products.product_name
  //                   ).innerHTML = "EXPIRED";
  //                 }
  //                 // Display the result in the element with id
              
  //                 document.getElementById('slider2' +
  //                   products.product_id + products.product_name
  //                 ).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  //               }, 1000);
  //         // const tmp_wrapper = document.createElement("div");
  //         //   tmp_wrapper.className = "row product-grid"
  //         //   tmp.append(tmp_wrapper)
  //         const tmp = document.createElement("div");
  //           tmp.id = "product-grid" + products.product_id;
            
  //         const tmp_countdown = document.createElement("div");
  //           tmp_countdown.id = 'slider2' + products.product_id + products.product_name;
  //           tmp_countdown.innerHTML = slider2;
  //           tmp.append(tmp_countdown);

  //         const tmp_img = document.createElement("a");
  //           tmp_img.className = "product-image";
  //           tmp.append(tmp_img);
  //           const tmp_img_src = document.createElement("img");
  //             tmp_img_src.src = require(`../../img/Product/Asian Art - Antiques/EdenFineAntiques.jpg`);
  //             tmp_img.append(tmp_img_src);

  //         const tmp_categoryname = document.createElement("div");
  //           tmp_categoryname.innerHTML = products.category_id;
  //           tmp_categoryname.className = "category-name";
  //           tmp.append(tmp_categoryname);

  //         const tmp_productname = document.createElement("div");
  //           tmp_productname.innerHTML = products.product_name.replace(/-/g, " ");
  //           tmp_productname.className = "product-name";
  //           tmp.append(tmp_productname);

  //         const tmp_producprice = document.createElement("a");
  //           tmp_producprice.innerHTML = products.product_start_price;
  //           tmp_producprice.className = "product-price";
  //           tmp.append(tmp_producprice);

  //         const tmp_icon = document.createElement("a");
  //           tmp_icon.className = "fa-solid fa-shopping-cart meta-cart";
  //           tmp.append(tmp_icon);


  //           tmp.className = "col-lg-3 col-md-4 col-xs-2 product-grid-item";
            
  //         $("#product-grid-wrapper2").append(tmp);
  //       });
  //     });
  // }
  // getData();

  // return slideItems;
};

export default LandingPageSlider2;

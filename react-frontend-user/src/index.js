import React, { Component } from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./layout/Header/Header";
import About from "./pages/AboutUs/About";
import Contacts from "./pages/Contact/Contacts";
import LandingPage from "./pages/LandingPageSlider/LandingPage";
import ProductByCategory from "./pages/Products/ProductByCategory/ProductByCategory";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";
import Footer from "./layout/Footer";
// import UserLogin from "./pages/User/UserLogin";

// const headerBody1 = ReactDOM.createRoot(document.getElementById("headerBody1"));

// function showTime() {
//   const myElement = (
//     <div>
//       <h2 style={{ marginLeft: "200px" }}>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

//   headerBody1.render(myElement);
// }

// setInterval(showTime, 1000);

const HomePage = () => {
  return (
    <Router>
      <div id="data" hidden></div>
      <Header />
      <Routes>
        {/* Home  */}
        <Route
          path="/"
          element={
            <LandingPage
            />
          }
        ></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<Contacts />}></Route>
        {/* <Route path="/login" element={<UserLogin />}></Route> */}
        {/* <Route path="/term-and-policy" element={<TermAndPolicy />}></Route>  */}

        {/* Product */}
        {/* {this.state.categories.map((category) => (
          <Route
            key={category.category_id}
            path={`/${category.category_name}`}
            element={<ProductByCategory />}
          ></Route>
        ))} */}

        {/* Product Detail   */}
        {/* {this.state.products.map((product) => (
          <Route
            key={product.product_SKU}
            path={`/${product.category_name}/${product.product_name}`}
            element={<ProductDetail />}
          ></Route>
        ))} */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default HomePage;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <HomePage style={{ padding: "0px", margin: "0px" }} />
  </React.Fragment>
);

reportWebVitals();

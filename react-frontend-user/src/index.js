import React, { Component } from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import $ from "jquery";

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./layout/Header/Header";
import About from "./pages/AboutUs/About";
import Contact from "./pages/Contact/Contact";
import LandingPage from "./pages/LandingPageSlider/LandingPage";
import ProductByCategory from "./pages/Products/ProductByCategory/ProductByCategory";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";
import Footer from "./layout/Footer";
import Login from "./pages/UserAction/Login";
import Register from "./pages/UserAction/Register";
import ForgetPassword from "./pages/UserAction/ForgetPassword";
import UserProfile from "./pages/UserAction/UserProfile";

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
// localStorage.removeItem("customer_info");

class HomePage extends Component {
  state = {
    products: [],
    categories: [],
    customers: [],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/selectallproducts", { method: "GET" })
      .then((products) => products.json())
      .then((products) => {
        this.setState({ products: products });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("http://127.0.0.1:8000/api/selectcategories", { method: "GET" })
      .then((categories) => categories.json())
      .then((categories) => {
        this.setState({ categories: categories });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("http://127.0.0.1:8000/api/customerinfo", { method: "GET" })
      .then((customers) => customers.json())
      .then((customers) => {
        this.setState({ customers: customers });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div id="data" hidden></div>
        <Header categories={this.state.categories} />
        <Routes>
          {/* Home  */}
          <Route
            path="/"
            element={
              <LandingPage
                products={this.state.products}
                categories={this.state.categories}
              />
            }
          ></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>

          {/* UserAction  */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/userprofile"
            element={<UserProfile userinfo={this.state.userinfo} />}
          ></Route>
          <Route
            path="/forgetpassword"
            element={
              <ForgetPassword
                style={{ backgroundImage: "url(../../img/About/about2.jpg)" }}
                userinfo={this.state.userinfo}
              />
            }
          ></Route>
          {/* <Route path="/term-and-policy" element={<TermAndPolicy />}></Route>  */}

          {/* Product */}
          {this.state.categories.map((category) => (
            <Route
              key={category.category_id}
              path={`/${category.category_name}`}
              element={
                <ProductByCategory
                  products={this.state.products}
                  category={category}
                />
              }
            ></Route>
          ))}

          {/* Product Detail   */}
          {this.state.products.map((product) => (
            <Route
              key={product.product_SKU}
              path={`/${product.category_id}/${product.product_name}`}
              element={
                <ProductDetail
                  products={this.state.products}
                  categories={this.state.categories}
                  product={product}
                />
              }
            ></Route>
          ))}
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HomePage style={{ padding: "0px", margin: "0px" }} />
  </BrowserRouter>
);

reportWebVitals();

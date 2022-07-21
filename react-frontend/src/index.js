import React, { Component } from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style-mobile.css";
import "./css/style-tablet.css";
import "./css/style-laptop.css";
import "./css/nicepage.css";
import "./css/home.css";
import "./css/admin.css";

import Header from "./layout/Header/Header";
import About from "./AboutUs/About";
import Contact from "./Contact/Contact";
import LandingPage from "./pages/LandingPageSlider/LandingPage";
import ProductByCategory from "./pages/Products/ProductByCategory/ProductByCategory";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";
import Footer from "./layout/Footer";

import AddCategory from "./pages/Admin/AddCategory";
import AddProduct from "./pages/Admin/AddProduct";
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

class HomePage extends Component {
  state = {
    categories: [],
    categoriesRoot: [],
    cart: [],
    products: [],
  };

  async componentDidMount() {
    const res1 = await axios.get("http://127.0.0.1:8000/api/selectallcategory");
    this.setState({ categories: res1.data });

    const res2 = await axios.get(
      "http://127.0.0.1:8000/api/selectcategoryroot"
    );
    this.setState({ categoriesRoot: res2.data });

    const res3 = await axios.get("http://127.0.0.1:8000/api/selectallproducts");

    this.setState({ products: res3.data });

    $("#data").data("categories", res1.data);
    $("#data").data("categoriesroot", res2.data);
    $("#data").data("cart", this.state.cart);
    $("#data").data("products", res3.data);
  }

  render() {
    
    return (
      <Router>
        <input
          type="text"
          id="data"
          data-categories={""}
          data-categoriesroot={""}
          data-cart={""}
          data-products={""}
          data-categoryid={15}
          data-category={""}
          data-productid={""}
          hidden
        />

        <Header
          categories={this.state.categories}
          categoriesRoot={this.state.categoriesRoot}
        />
        <Routes>
          {/* Home  */}
          <Route
            path="/"
            element={<LandingPage products={this.state.products} categories={this.state.categories} />}
          ></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/addcategory" element={<AddCategory />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          {/* <Route path="/term-and-policy" element={<TermAndPolicy />}></Route>  */}

          {/* Product */}
          {this.state.categories.map((category) => (
            <Route
              key={category.category_id}
              path={`/${category.category_root_name}/${category.category_name}`}
              element={<ProductByCategory />}
            ></Route>
          ))}

          {this.state.categoriesRoot.map((categoryRoot) => (
            <Route
              key={categoryRoot.category_id}
              path={`/${categoryRoot.category_name}`}
              element={<ProductByCategory />}
            ></Route>
          ))}

          {/* Product Detail   */}
          {this.state.products.map((product) => (
            <Route
              key={product.product_SKU}
              path={`/${product.category_name}/${product.product_name}`}
              element={<ProductDetail />}
            ></Route>
          ))}
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default HomePage;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <HomePage />
  </React.Fragment>
);

reportWebVitals();

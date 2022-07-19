import React from "react";
import reportWebVitals from "./reportWebVitals";
import $ from "jquery";
import axios from "axios";
import LandingPage from "./pages/LandingPageSlider/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import HeaderBody from "./layout/HeaderBody/HeaderBody";
// import Footer from "./layout/Footer";
import Header from "./Header";
import Body from "./Body";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import "./css/style-mobile.css";
import "./css/style-tablet.css";
import "./css/style-laptop.css";
import ProductByCategory from "./pages/Products/ProductByCategory/ProductByCategory";
const headerBody1 = ReactDOM.createRoot(document.getElementById("root"));

function showTime() {
  const myElement = (
    <div>
      <h2 style={{ marginLeft: "200px" }}>{new Date().toLocaleTimeString()}</h2>
    </div>
  );

  headerBody1.render(myElement);
}

setInterval(showTime, 1000);

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
            element={
              <LandingPage
                products={this.state.products}
                categories={this.state.categories}
              />
            }
          ></Route>
          {/* <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/term-and-policy" element={<TermAndPolicy />}></Route> */}

          {/* Cart */}
          {/* <Route
            path="/cart"
            element={<Cart />}
          ></Route> */}
          {/* <Route
            path="/updatecart"
            element={<LandingPage  />}
          ></Route> */}

          {/* Product */}
          {this.state.categories.map((category) => (
            <Route
              key={category.category_id}
              path={`/${category.category_root_name}/${category.category_name}`}
              element={
                <ProductByCategory
                  category={category}
                  categories={this.state.categories}
                  categoriesRoot={this.state.categoriesRoot}
                  products={this.state.products}
                />
              }
            ></Route>
          ))}

          {this.state.categoriesRoot.map((categoryRoot) => (
            <Route
              key={categoryRoot.category_id}
              path={`/${categoryRoot.category_name}`}
              element={
                <ProductByCategory
                  products={this.state.products}
                  categoriesRoot={this.state.categoriesRoot}
                  categoryRoot={categoryRoot}
                  categories={this.state.categories}
                />
              }
            ></Route>
          ))}

          {/* Product Detail   */}
          {/* {this.state.products.map((product) => (
            <Route
              key={product.product_SKU}
              path={`/${product.category_name}/${product.product_name}`}
              element={
                <ProductDetail
                  product={product}
                  products={this.state.products}
                  categories={this.state.categories}
                />
              }
            ></Route>
          ))} */}
        </Routes>
        <Body
          categories={this.state.categories}
          products={this.state.products}
        />
      </Router>
    );
  }
}

export default HomePage;

const body = ReactDOM.createRoot(document.getElementById("header"));
body.render(
  <React.Fragment>
    <HomePage />
  </React.Fragment>
);

// const body1 = ReactDOM.createRoot(document.getElementById("body"));
// body1.render(
//   <Router>
//     <Body />
//   </Router>
// );

// const footer = ReactDOM.createRoot(document.getElementById("footer"));
// footer.render(<Footer />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

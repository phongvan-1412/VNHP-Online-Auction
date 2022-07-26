import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
// import Category from "./user/pages/Category/Category";
// import Content from "./user/layout/Content/Content";
// import HomeContent from "./user/pages/Home/HomeContent";
// import Login from "../src/user/pages/Login-Register/Login";
// import Register from "../src/user/pages/Login-Register/Register";

import LandingPage from "./user/pages/LandingPageSlider/LandingPage";
import About from "./user/pages/About";
import ContactUs from "./user/pages/Contact/ContactUs";
import TermAndPolicy from "./user/pages/TermAndPolicy";

import ProductByCategory from "./user/pages/Products/ProductByCategory/ProductByCategory";
import Cart from "./user/pages/Cart/Cart";
import ProductDetail from "./user/pages/Products/ProductDetail/ProductDetail";

class MainRoute extends Component {
  render() {
    const { products, cart, categories, categoriesRoot,updateCart } = this.props;
    return (
      <div className="container" style={{ padding: "0px", margin: "0px" }}>
        <Routes>
          {/* Home  */}
          <Route path="/" element={<LandingPage products={products} cart={cart} categories={categories} categoriesRoot={categoriesRoot} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/term-and-policy" element={<TermAndPolicy />}></Route>


          {/* Cart */}
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart}/>}></Route>
          <Route path="/updatecart" element={<LandingPage updateCart={updateCart}/>}></Route>

          {/* Product */}
          {categories.map((category) => (
            <Route key={category.category_id} path={`/${category.category_root_name}/${category.category_name}`} element={<ProductByCategory category={category} categories={categories} categoriesRoot={categoriesRoot} products={products}/>}></Route>
          ))}

          {categoriesRoot.map((categoryRoot) => (
            <Route key={categoryRoot.category_id} path={`/${categoryRoot.category_name}`} element={<ProductByCategory products={products} categoriesRoot={categoriesRoot} categoryRoot={categoryRoot} categories={categories}/>}></Route>
          ))}

            {/* Product Detail   */}
          {products.map((product) => (
            <Route key={product.product_SKU} path={`/${product.category_name}/${product.product_name}`} element={<ProductDetail product={product} products={products} categories={categories}/>}></Route>
          ))} 
        </Routes>
      </div>
    );
  }
}

export default MainRoute;

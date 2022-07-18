import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import Dropdown from "./DropdownNavBar/Dropdown";

class Header extends Component {
  state = {
    categories: [],
    categoriesRoot: [],
    cart: [],
    products: [],
    drop: false,
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
      <div
        className="header-menu"
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <input type="text" id="data" data-categories={""} data-categoriesroot={""} data-cart={""} data-products={""} hidden/>

        <Routes>
          {/* Home  */}
          {/* <Route path="/" element={<LandingPage products={products} cart={cart} categories={categories} categoriesRoot={categoriesRoot} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/term-and-policy" element={<TermAndPolicy />}></Route> */}

          {/* Cart */}
          {/* <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart}/>}></Route>
          <Route path="/updatecart" element={<LandingPage updateCart={updateCart}/>}></Route> */}

          {/* Product */}
          {/* {categories.map((category) => (
            <Route key={category.category_id} path={`/${category.category_root_name}/${category.category_name}`} element={<ProductByCategory category={category} categories={categories} categoriesRoot={categoriesRoot} products={products}/>}></Route>
          ))} */}

          {/* {categoriesRoot.map((categoryRoot) => (
            <Route key={categoryRoot.category_id} path={`/${categoryRoot.category_name}`} element={<ProductByCategory products={products} categoriesRoot={categoriesRoot} categoryRoot={categoryRoot} categories={categories}/>}></Route>
          ))} */}

          {/* Product Detail   */}
          {/* {products.map((product) => (
            <Route key={product.product_SKU} path={`/${product.category_name}/${product.product_name}`} element={<ProductDetail product={product} products={products} categories={categories}/>}></Route>
          ))}  */}
        </Routes>
        <header className="menu">
          {/* <Link to="/" replace>
              <img
                src={require("../../img/Header/logo.jpg")}
                className="logo"
              />
            </Link> */}
          <Link to="/about" replace className="about">
            About
          </Link>
          {/* <Link to="/blog" replace className="blog">
              Blog
            </Link> */}
          <Link to="/contactus" replace className="contact">
            Contact
          </Link>
          <div
            style={{ height: "50px", marginTop: "57px" }}
            className="product"
            onMouseEnter={() => this.setState({ drop: true })}
            onMouseLeave={() => this.setState({ drop: false })}
          >
            <Link to="#" replace>
              Product
              <span>
                {this.state.drop ? (
                  <Dropdown
                    categoriesRoot={this.state.categoriesRoot}
                    categories={this.state.categories}
                  />
                ) : null}
              </span>
            </Link>
          </div>

          {/* <Link to="/shipping" replace className="shipping">
            Shipping
          </Link> */}
          <Link to="/term-and-policy" replace className="needhelp">
            Needhelp
          </Link>

          {/* {isCustomerLogin ? (
              <Link to="/customer" replace className="customer">
                Customer
              </Link>
            ) : (
              <div>
                <a href="http://127.0.0.1:8000/register">Register</a>
                <a href="http://127.0.0.1:8000/login">Login</a>
              </div>
            )} */}

          {/* <a href="https://www.facebook.com/" className="meta-facebook">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              className="meta-instagram"
            >
              <FaInstagramSquare />
            </a>
            <a href="https://twitter.com/" className="meta-twitter">
              <FaTwitter />
            </a> */}
          {/* <Link to="#" className="nav-bag-container">
              <AiOutlineShoppingCart style={{ color: "white" }} />
              <div
                className="nav-bag-wrapper"
                onClick={() => setCartMini(!cartMini)}
              >
                <div className="bag-quantity">
                  <span
                    className="bag-quantity-content"
                    style={{ color: "white" }}
                  >
                    {itemsCount} items - {cartTotalPayment.toLocaleString()}đ
                  </span>
                </div>
                <div className="bag-price">
                  <span className="bag-price-content">
                    {cartMini && (
                      <QuickViewCartItems cart={cart} updateCart={updateCart} />
                    )}
                  </span>
                </div>
              </div>
            </Link> */}
        </header>
      </div>
    );
  }
}
export default Header;

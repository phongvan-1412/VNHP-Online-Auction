import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../../redux/actions/productsActions";
import { getCart } from "../../../redux/actions/cartAction";
import { getCategories } from '../../../redux/actions/categoriesActions';
import { getCategoriesRoot } from "../../../redux/actions/categoryRootActions";
import { getCustomerInfo } from "../../../redux/actions/customerLoginAction";

import HomePage from "./HomePage";
class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
    this.props.getCategoriesRoot();
    this.props.getCategories();
    this.props.getCustomerInfo();
  }

  render() {
    const { products, cart, categories, categoriesRoot,customer } = this.props;
    return (
      <div>
        <HomePage products={products} cart={cart} categories={categories} categoriesRoot={categoriesRoot} customer={customer}/>
      </div>
    );
  }
}
Home.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  getCategoriesRoot: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getCustomerInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  cart: state.cart.cart,
  categoriesRoot: state.categoriesRoot.categoriesRoot,
  categories: state.categories.categories,
  customer: state.customer.customer,
});

export default connect(mapStateToProps, { getProducts, getCart, getCategoriesRoot, getCategories,getCustomerInfo })(Home);

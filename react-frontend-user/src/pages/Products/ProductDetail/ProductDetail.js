import React, { Component } from "react";
import $ from "jquery";
import WrapBreadcrumbDetail from "./WrapBreadcrumbDetail";
import SidebarSuggest from "./SidebarSuggest";
import DisplayProductDetail from "./DisplayProductDetail";

const ProductDetail = ({ product, products, categories, feedbacks }) => {
  // const products = $("#data").data("products");
  // const product_id = $("#data").data("productid");
  // const categories = $("#data").data("categories");

  let suggestProducts = [];
  products.forEach(product => {
    if (product.category_id === product.category_id) {
      suggestProducts = [...suggestProducts, product];
    }
  });

  let currentCategory = [];
  categories.forEach(category => {
    if (category.category_id === product.category_id) {
      currentCategory = category;
    }
  })

  let currentFeedback = [];
  feedbacks.forEach((feedback) => {
    if (feedback.product_id == product.product_id) {
      currentFeedback = [...currentFeedback, feedback];
    }
  })
  
  return (
    <div className="row">
      <div className="col-md-1" style={{ padding: "0px", margin: "0px" }}></div>
      <div
        className="col-lg-7 col-md-7 product-detail"
        style={{ padding: "0px", margin: "0px" }}
      >
        <WrapBreadcrumbDetail product={product} category={currentCategory} />
        <DisplayProductDetail product={product} currentFeedback={currentFeedback} />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12" style={{ padding: "0px", margin: "0px" }}>
        <SidebarSuggest products={products} style={{ padding: "0px", margin: "0px" }} />
      </div>
      <div className="col-md-1" style={{ padding: "0px", margin: "0px" }}></div>
    </div>
  );
};

export default ProductDetail;

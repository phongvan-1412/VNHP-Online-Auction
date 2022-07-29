import React, { Component } from "react";
import $ from "jquery";
import WrapBreadcrumbDetail from "./WrapBreadcrumbDetail";
import SidebarSuggest from "./SidebarSuggest";
import DisplayProductDetail from "./DisplayProductDetail";

const ProductDetail = ({product,products,categories}) => {
  // const products = $("#data").data("products");
  // const product_id = $("#data").data("productid");
  // const categories = $("#data").data("categories");

  let currentProduct = [];
  products.forEach(item => {
    if(item.product_id === product.product_id)
    {
        currentProduct = product;
    }
  });

  let suggestProducts = [];
  products.forEach(product => {
    if(product.category_id === currentProduct.category_id)
    {
        suggestProducts = [...suggestProducts,product];
    }
  });

  let currentCategory = [];
  categories.forEach(category =>{
    if(category.category_id === currentProduct.category_id)
    {
        currentCategory = category;
    }
  })

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div
        className="col-lg-7 col-md-7 product-detail"
        style={{ padding: "0px", margin: "0px" }}
      >
        <WrapBreadcrumbDetail product={currentProduct} category={currentCategory}/>
        <DisplayProductDetail product={products}/>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <SidebarSuggest products={products}/>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default ProductDetail;

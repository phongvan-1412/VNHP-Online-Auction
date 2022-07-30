import React, { Component } from "react";
import $ from "jquery";
import WrapBreadcrumbDetail from "./WrapBreadcrumbDetail";
import SidebarSuggest from "./SidebarSuggest";
import DisplayProductDetail from "./DisplayProductDetail";

const ProductDetail = ({ product, products, categories }) => {
  // const products = $("#data").data("products");
  // const product_id = $("#data").data("productid");
  // const categories = $("#data").data("categories");

  let suggestProducts = [];
  products.forEach(product => {
    if(product.category_id === product.category_id)
    {
        suggestProducts = [...suggestProducts,product];
    }
  });

  console.log(suggestProducts)
  let currentCategory = [];
  categories.forEach(category =>{
    if(category.category_id === product.category_id)
    {
        currentCategory = category;
    }
  })

  return (
    <div className="row">
      <div className="col-md-1" style={{padding: "0px", margin: "0px"}}></div>
      <div
        className="col-lg-7 col-md-7 product-detail"
        style={{ padding: "0px", margin: "0px" }}
      >
        <WrapBreadcrumbDetail product={product} category={currentCategory}/>
        <DisplayProductDetail product={product}/>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12" style={{padding: "0px", margin: "0px"}}>
        <SidebarSuggest products={products} style={{padding: "0px", margin: "0px"}}/>
      </div>
      <div className="col-md-1" style={{padding: "0px", margin: "0px"}}></div>
    </div>
  );
};

export default ProductDetail;

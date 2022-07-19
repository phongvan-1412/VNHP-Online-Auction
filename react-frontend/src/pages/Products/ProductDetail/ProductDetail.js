import React, { Component } from "react";
import $ from "jquery";
import WrapBreadcrumbDetail from "./WrapBreadcrumbDetail";
import SidebarSuggest from "./SidebarSuggest";
import DisplayProductDetail from "./DisplayProductDetail";

const ProductDetail = () => {
  const products = $("#data").data("products");
  const product_id = $("#data").data("productid");
  const categories = $("#data").data("categories");
//   console.log(products);
//   console.log(product_id);
//   console.log(categories);
  let currentProduct = [];
  products.forEach(product => {
    if(product.product_id === product_id)
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
      <div
        className="col-lg-9 col-md-9 product-detail"
        style={{ padding: "0px", margin: "0px" }}
      >
        <WrapBreadcrumbDetail product={currentProduct} category={currentCategory}/>
        <DisplayProductDetail product={currentProduct}/>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <SidebarSuggest products={suggestProducts}/>
      </div>
    </div>
  );
};

export default ProductDetail;

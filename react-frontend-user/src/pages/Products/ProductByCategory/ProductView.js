import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductQuickView from "./ProductQuickView";

const ProductView = ({ products, product, categories }) => {
  const [currentProduct, setCurrentProduct] = useState();
  
  const onClick = (e) =>{
    console.log(e.target.name)
    let tmp = {};
    products.forEach(product => {
      if(product.product_id == e.target.name){
        tmp = product;
      }

    });
    setCurrentProduct(tmp);
  }
  return (
    <div
      className="product-grid-wrapper col-xl-3 col-md-4 col-xs-6"
      id="product-grid-wrapper"
    >
      <div id="product-quick-view">
        <div className="product-quickviewbtn-wrapper">
          <button data-bs-toggle="modal" data-bs-target="#productQuickView" name={product.product_id} onClick={onClick}>
            Quick View
          </button>
        </div>
      </div>

      <ProductQuickView currentProduct={currentProduct}/>
      <ProductItem product={product} categories={categories} />
    </div>
  );
};

export default ProductView;

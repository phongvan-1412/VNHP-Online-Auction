import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductQuickView from "./ProductQuickView";

const ProductView = ({ products, product, categories }) => {
  const [id, setId] = useState();
  const onClick = (e) =>{
    setId(e.target.name);
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

      <ProductQuickView products={products} id={id}/>
      <ProductItem product={product} categories={categories} />
    </div>
  );
};

export default ProductView;

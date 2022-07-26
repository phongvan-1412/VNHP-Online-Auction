import React, { Component } from "react";
import Products from "./Products";

const ProductByCategory = ({products, category }) => {
  return (
    <Products products={products} category={category} />
  );
};

export default ProductByCategory;

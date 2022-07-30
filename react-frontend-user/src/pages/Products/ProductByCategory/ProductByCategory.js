import React, { Component } from "react";
import Products from "./Products";

const ProductByCategory = ({products, category, categories }) => {
  return (
    <Products products={products} category={category} categories={categories}/>
  );
};

export default ProductByCategory;

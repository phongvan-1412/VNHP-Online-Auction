import React, { Component } from "react";
import Products from "./Products";

const ProductByCategory = ({ category, categoryRoot }) => {
  return (
    <Products category={category} categoryRoot={categoryRoot} />
  );
};

export default ProductByCategory;

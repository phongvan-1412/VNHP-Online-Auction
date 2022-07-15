import React, { Component } from "react";
import { Link } from "react-router-dom";

import Products from "./Products";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

const ProductByCategory = ({ category, categoryRoot }) => {
  return (
    <div className="row">
      <Products category={category} categoryRoot={categoryRoot} />
    </div>
  );
};

export default ProductByCategory;

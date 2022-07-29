import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import ProductView from "./ProductView";

const Products = ({products,category}) => {
  let totalProducts = [];

  products.forEach((product) => {
    if (product.category_id === category.category_id) {
      totalProducts = [...totalProducts, product];
    }
  });

  function onClick(e) {
    $("#data").data("productbycate", e.target.name);
  }

  const productsPerPage = 12;
  const currentPage = 1;

  const indexOfLastPage = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const currentProducts = totalProducts.slice(indexOfFirstPage, indexOfLastPage);

  let pageNumbers = [];
  console.log(currentProducts.length)
  for (let i = 1; i <= Math.ceil(totalProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => currentPage = pageNumber;

  return (
    <div className="container">
      <div className="row" style={{ padding: "0px", margin: "0px" }}>
        <div className="container" style={{ padding: "0px", margin: "0px" }}>
          <div className="row">
            {/* wrap-breadcrumb */}
            <div className="wrap-breadcrumb" style={{ margin: "50px 0px" }}>
              <ul>
                <li className="item-link">
                  <Link replace to="/" className="home-link">HOME</Link>
                </li>

                <li className="item-link1">
                  <Link to={`/${category.category_name}`} name={category.category_id} replace onClick={onClick}>
                    {category.category_name.replace(/-/g, " ")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            {/* sidebar-filter  */}
            <div className="col-md-3 sidebar-filter">
              <div className="product-filter-container">
                <div className="filter-title">Filter Products By</div>
                <div className="widget mercado-widget filter-widget brand-widget">
                  <h2 className="widget-title">CATEGORY</h2>
                  <div className="widget-content"></div>
                </div>
              </div>
            </div>
            {/* display-products  */}

            <div className="col-md-9">
              <div className="row" style={{ marginTop: "-20px" }}>
                {currentProducts.map((product) => {
                  return (
                    <ProductView key={product.product_id} product={product} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="row" style={{ padding: "0px", margin: "0px" }}>
          <div
            className="col-md-3"
            style={{ padding: "0px", margin: "0px" }}
          ></div>

          <div className="col-md-9" style={{ padding: "0px", margin: "0px" }}>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <Link to="#" className="page-link" onClick={() => paginate(number)}>
                    {number}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

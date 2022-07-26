import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import ProductView from "./ProductView";

const Products = ({products,category}) => {
  // let category_id = $("#data").data("productbycate");
  // let products = $("#data").data("products");
  // let categories = $("#data").data("categories");
  // let categoriesroot = $("#data").data("categoriesroot");

  // get current category
  // let cate = [];
  // let check = false;
  // if (category_id <= 5) {
  //   check = true;
  //   categoriesroot.forEach((category) => {
  //     if (category.category_id == category_id) {
  //       cate = category;
  //     }
  //   });
  // } else {
  //   categories.forEach((category) => {
  //     if (category.category_id == category_id) {
  //       cate = category;
  //     }
  //   });
  // }

  // get subCate
  // let subCate = [];
  // categories.forEach((cate) => {
  //   if (cate.category_root == category_id) {
  //     subCate = [...subCate, cate];
  //   }
  // });

  // get products
  // let currentProducts = [];

  // if (category_id <= 5) {
  //   categories.forEach((cate) => {
  //     products.forEach((product) => {
  //       if (cate.category_root == category_id) {
  //         if (product.category_id == cate.category_id) {
  //           currentProducts = [...currentProducts, product];
  //         }
  //       }
  //     });
  //   });
  // } else {
  //   products.forEach((product) => {
  //     if (product.category_id == category_id) {
  //       currentProducts = [...currentProducts, product];
  //     }
  //   });
  // }

  function onClick(e) {
    $("#data").data("productbycate", e.target.name);
  }

  const productsPerPage = 8;
  const currentPage = 1;

  //Change page
  const paginate = (pageNumber) => currentPage = pageNumber;
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="row">
      <div className="row" style={{ padding: "0px", margin: "0px" }}>
        <div className="container" style={{ padding: "0px", margin: "0px" }}>
          <div className="row">
            {/* wrap-breadcrumb */}
            <div className="wrap-breadcrumb" style={{ margin: "50px 0px" }}>
              <ul>
                <li className="item-link">
                  <Link replace to="/" className="home-link">
                    HOME
                  </Link>
                </li>
                <li className="item-link1">
                  <Link
                    to={`/${category.category_name}`}
                    name={category.category_id}
                    replace
                    onClick={onClick}
                  >
                    {/* <span className="categoryRoot-link1" > */}
                    {category.category_name.replace("-", " ")}
                    {/* </span> */}
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
                {products.map((product) => {
                  return (
                    <ProductView key={product.product_SKU} product={product} />
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
                  <Link
                    to="#"
                    className="page-link"
                    onClick={() => paginate(number)}
                  >
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

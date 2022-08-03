import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

//Slider
import { Slider } from "@material-ui/core"

import ProductView from "./ProductView";

const Products = ({ products, category, categories }) => {

    const [currentPage, setCurrentPage] = useState(1);

    //Filter by Price
    const [value, setVal] = useState([0,20000]);

    let test  = {min:value[0],max:value[1]};

    const updateRange = (e,value) => {
      setVal(value);
      const valueNow = $("#price-slider").children()[4].ariaValueNow;

      test = {min:value[0],max:value[1]};

      if(valueNow>test.min){
        test.max = valueNow;
      }else{
        test.min = valueNow;
      }
    }
    
    //Filter by Date
    const [sort, setSort] = useState(0);
    const onClick = (e, sort) => {
      setSort(e.target.value); 
      
    }
    

    let totalProducts = [];
    products.forEach((product) => {
      var productStartDate = product.product_start_aution_day + " " + "00:00:00";
      var productEndDate = product.product_end_aution_day + " " + "00:00:00";

      var countNext7Day = new Date().setDate(new Date().getDate() + 7);
      var countNext30Day = new Date().setDate(new Date().getDate() + 30);
      var countNext60Day = new Date().setDate(new Date().getDate() + 60);
      
      var countDownStartDate = new Date(new Date(productStartDate).toLocaleString()).getTime();
      var countDownEndDate = new Date(new Date(productEndDate).toLocaleString()).getTime();
      var now = new Date(new Date().toLocaleString()).getTime();

      if (sort == 0){
        totalProducts = [...totalProducts, product];    
      }else{
        if (countDownStartDate <= now && now <= countDownEndDate){
          sort == 1 ;
          totalProducts = [...totalProducts, product];    
        }
        if (now <= countNext7Day){
          sort == 2 ;
          totalProducts = [...totalProducts, product];
        }
      }
      
      

      // if (product.category_id === category.category_id && product.product_start_price >= test.min && product.product_start_price <= test.max ){
      //     totalProducts = [...totalProducts, product];    
      // }

    });

    let categoryItems = [];
    categories.forEach((currentCates) => {
      if (currentCates.category_id !== category.category_id) {
        categoryItems = [...categoryItems, currentCates];
      }
    });
    
    

    //Pagination
    const productsPerPage = 12;
  
    const indexOfLastPage = currentPage * productsPerPage;
    const indexOfFirstPage = indexOfLastPage - productsPerPage;
    const currentProducts = totalProducts.slice(indexOfFirstPage, indexOfLastPage);
  
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts.length / productsPerPage); i++) {
      pageNumbers.push(i);
    }

    const paginate = (number) => {
      setCurrentPage(number); 
    }


    return (
      <div className="container-fluid d-flex justify-content-center" style={{ padding: "0px", margin: "0px" }}>
        <div className="row" style={{ padding: "0px", margin: "0px 30px" }}>
          <div className="container" style={{ padding: "0px", margin: "0px" }}>
            <div className="row">
              {/* wrap-breadcrumb */}
              <div className="wrap-breadcrumb" style={{ margin: "50px 0px" }}>
                <ul>
                  <li className="item-link">
                    <Link replace to="/" className="home-link">HOME</Link>
                  </li>
  
                  <li className="item-link1">
                    <Link to={`/category/${category.category_name}`}>{category.category_name.replace(/-/g, " ")}</Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="row">
              {/* sidebar-filter  */}
              <div className="col-md-2 sidebar-filter">
                <div className="product-filter-container">
                  <div className="filter-title">Filter Products By</div>
                  <div className="widget mercado-widget filter-widget brand-widget">
                    <h2 className="widget-title">CATEGORY</h2>
                    <div className="widget-content">
                      <ul className="list-style vertical-list list-limited" data-show="6">
                        {categoryItems.map((item) =>{
                          return(
                            <li className="list-item" key={item.category_id}>
                              <Link className="filter-link" to={`/category/${item.category_name}`}><i className="fa-solid fa-crown"></i> {item.category_name.replace(/-/g, " ")}</Link>
                              <span className="count">({item.product_quantity})</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    <div className="widget mercado-widget filter-widget brand-widget">
                      <h2 className="widget-title">PRICE</h2>
                      <div className="widget-content-price">
                        <div className="range-input-price">
                              <Slider 
                              id="price-slider"
                              min={10}
                              max={20000}
                              step={10}
                              value={value}
                              onChange={updateRange}
                              valueLabelDisplay = 'auto'
                              />
                              <span>Drag or pick price of product you want to look for.</span>
                        </div>
                      </div>
                    </div>
                    <div className="widget mercado-widget filter-widget brand-widget">
                      <h2 className="widget-title">DATE</h2>
                      <div className="widget-content-date">
                       
                        <div className="range-date">
                          {/* <DateRange 
                            id="date-filter"
                            date={currentDate}
                            name={date}
                            onChange={updateDate}
                             /> */}
                             <select id="date-select" onChange={onClick} defaultValue="Choose Your Option">
                                <option value="0" hidden>All Products</option>
                                <option value="1">On Bidding</option>
                                <option value="7">Next 7 Days</option>
                                <option value="30">Next 30 Days</option>
                                <option value="60">Next 60 Days</option>
                            </select>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* display-products  */}
  
              <div className="col-md-10">
                <div className="row">
                  {currentProducts.map((product) => {
                    return (
                      <ProductView key={product.product_id} product={product}/>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="row" style={{ padding: "0px", margin: "0px" }}>
            <div
              className="col-md-2"
              style={{ padding: "0px", margin: "0px" }}
            ></div>
  
            <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
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
  }

export default Products;

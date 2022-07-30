import React, { Component } from "react";
import { Link, renderMatches } from "react-router-dom";
import $ from "jquery";
import ProductView from "./ProductView";

class Products extends Component {
  state = {
    currentPage: 1
  }
  render(){
    const { products, category, categories } = this.props;
    let totalProducts = [];
    products.forEach((product) => {
      if (product.category_id === category.category_id) {
        totalProducts = [...totalProducts, product];
      }
    });

    let categoryItems = [];
    categories.forEach((currentCates) => {
      if (currentCates.category_id !== category.category_id) {
        categoryItems = [...categoryItems, currentCates];
      }
    });
  
    const productsPerPage = 12;
  
    const indexOfLastPage = this.state.currentPage * productsPerPage;
    const indexOfFirstPage = indexOfLastPage - productsPerPage;
    const currentProducts = totalProducts.slice(indexOfFirstPage, indexOfLastPage);
  
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts.length / productsPerPage); i++) {
      pageNumbers.push(i);
    }
    const paginate = (pageNumber) => this.setState({currentPage: pageNumber});
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
                            <li className="list-item">
                              <Link className="filter-link" to={`/category/${item.category_name}`}><i class="fa-solid fa-crown"></i> {item.category_name.replace(/-/g, " ")}</Link>
                              <span className="count">({item.product_quantity})</span>
                            </li>
                          )
                        })}
                      </ul>
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
};

export default Products;

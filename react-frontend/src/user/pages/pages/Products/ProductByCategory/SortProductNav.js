import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class SortProductNav extends Component{
    render() {
      return (
        <div className="wrap-shop-control" style={{marginTop: '62px'}}>
            <div className="sort-item orderby">
                <span className="sort-item-head-text">Sort by</span>
                <select name="orderby" defaultValue={'Product Name'} className="use-chosen" >
                    <option value="menu_order">Product Name</option>
                    <option value="price">Price</option>
                    <option value="price-desc">Weight</option>
                </select>
            </div>

            <div className="sort-item product-per-page">
                <span className="sort-item-head-text">Show</span>
                <select name="post-per-page" defaultValue={12} className="use-chosen" >
                    <option value="12" >12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                </select>
                <span className="sort-item-head-text">per page</span>
            </div>
        </div>
      )
    }
}

export default SortProductNav;
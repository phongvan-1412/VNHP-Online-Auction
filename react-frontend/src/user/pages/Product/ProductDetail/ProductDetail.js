import React, { Component, useState, useEffect } from "react";

import WrapBreadcrumbDetail from "./WrapBreadcrumbDetail";
import SidebarSuggest from "./SidebarSuggest";
import DisplayProductDetail from "./DisplayProductDetail";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class ProductDetail extends Component {
    render(){
        const { product, products } = this.props;

        return(
            <div className="row">
                <div className="col-lg-9 col-md-9 product-detail" style={{padding: '0px', margin: '0px'}}>
                    <WrapBreadcrumbDetail product={product}/>
                    <DisplayProductDetail product={product}/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <SidebarSuggest products={products} product={product}/>
                </div>
            </div>
            
        )
    }
}

export default ProductDetail;
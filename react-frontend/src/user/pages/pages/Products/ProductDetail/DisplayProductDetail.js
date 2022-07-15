import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ProductDetailItem from './ProductDetailItem';


import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class DisplayProductDetail extends Component {
    render(){
        const { product } = this.props;

        return(
            <div className="container product-detail-display" style={{margin:'0px',padding: '0px'}}>
                <ProductDetailItem product={product} />
            </div>
        )
    }

        
}

export default DisplayProductDetail;
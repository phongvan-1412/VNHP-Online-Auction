import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class WrapBreadcrumbDetail extends Component{
    render(){
        const {  product } = this.props;
        
        return(
            <div className="wrap-breadcrumb" >
                <ul>
                    <li className="item-link"><Link to="#" className="home-link">HOME</Link></li>
                    <li className="item-link"><Link to="#">{product.category_name.replace(/-/g, " ")}</Link></li>
                    <li className="item-link"><span>{product.product_name.replace(/-/g, " ")}</span></li>
                </ul>
            </div>
        )
    }
}

WrapBreadcrumbDetail.propTypes = {
    product: PropTypes.object.isRequired,
};

export default WrapBreadcrumbDetail;
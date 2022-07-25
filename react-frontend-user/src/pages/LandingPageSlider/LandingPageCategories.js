import React, { Component } from "react";
import { Link } from 'react-router-dom';

const LandingPageCategories = ({categories}) => {
    return(
        <div className="row landingpage-category-wrapper" style={{display:"flex", alignItems: "center", margin:"0px"}}>
            <b className="landingpage-category-headtext">CATEGORIES</b>
            <hr />
            <div className="col-xl-3 col-md-4 col-xs-6 landingpage-category-item-wrapper" style={{padding: "0px"}}>
                {categories.map(category=>{
                    return(
                        <Link to="#">
                            <img src={require('../../img/LandingPage/Fine Art.jpg')} />            
                            <div className="landingpage-category-item-title">
                                <Link to ="/" className="landingpage-category-item-name">{category.category_name.replace(/-/g, " ")}</Link>
                            </div>
                        </Link> 
                )})}
            </div>  
        </div>
             
    );
}

export default LandingPageCategories;
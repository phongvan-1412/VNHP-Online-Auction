import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";

const LandingPageCategories = ({categories}) => {
    const showCategory = (
        <div className="row landingpage-category-wrapper" style={{padding: "0px", margin:"0px"}}>
            <b className="landingpage-category-headtext" style={{padding: "0px", margin:"0px"}}>CATEGORIES</b>
            <hr />
            <div className="landingpage-category-grid" style={{padding: "0px"}}>
                {categories.map((category) => {
                    return(
                        <Link to={`/category/${category.category_name}`} >
                            <img className="landingpage-category-img" src={require(`../../../../LaravelAPI/public/CategoryImg/${category.category_img_name}`)}/>
                            <Link to={`/category/${category.category_name}`} className ="landingpage-category-item-name">{category.category_name.replace(/-/g, " ")}</Link>
                        </Link>
                    )
                })}    
            </div>
        </div>        
    );

    return showCategory;
}

export default LandingPageCategories;
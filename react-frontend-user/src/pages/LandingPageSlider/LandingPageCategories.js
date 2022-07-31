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
                        <Link to={`/category/${category.category_name}`} className="row landingpage-category-item-wrapper" key={category.category_id}>
                            <div className="landingpage-category-img" >
                                <img src={require(`../../../../LaravelAPI/public/CategoryImg/${category.category_img_name}`)}/>
                            </div>
                            
                            <div className ="landingpage-category-name-wrapper">
                                <Link to={`/category/${category.category_name}`} className ="landingpage-category-name">{category.category_name.replace(/-/g, " ")}</Link>
                            </div>
                        </Link>
                    )
                })}    
            </div>
        </div>        
    );

    return showCategory;
}

export default LandingPageCategories;
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";

const LandingPageCategories = () => {
    const showCategory = (
        <div className="row landingpage-category-wrapper" style={{display:"flex", alignItems: "center", margin:"0px"}}>
            <b className="landingpage-category-headtext">CATEGORIES</b>
            <hr />
            <div id="landingpage-category-grid" style={{padding: "0px"}}>
                
            </div>  
        </div>        
    );
    function getData() {
        fetch("http://127.0.0.1:8000/api/selectcategories", { method: "GET" })
          .then((res) => res.json())
          .then((res) => {
            res.map((category) => {
                const tmp = document.createElement("a");
                    tmp.id = "category-grid" + category.category_id; 

                const tmp_img = document.createElement("img");
                    tmp_img.src = require('../../img/LandingPage/Fine Art.jpg');
                    tmp.append(tmp_img);

            
                const tmp_imgname_link = document.createElement("a");
                    tmp_imgname_link.className = "landingpage-category-item-name";
                    tmp_imgname_link.innerHTML = category.category_name.replace(/-/g, " ");
                    tmp.append(tmp_imgname_link);
                    
                 tmp.className = "landingpage-category-item-wrapper";

                $("#landingpage-category-grid").append(tmp);

            })
          }
    )}
    getData();
    return showCategory;
}

export default LandingPageCategories;
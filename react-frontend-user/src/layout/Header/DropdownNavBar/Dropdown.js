import { Link } from "react-router-dom";
import React, { Component } from "react";
import $ from "jquery";

const Dropdown = ({categories}) => {

    const element = (
      // <ul>
        // <div className="container">
          <div className="row">
            {categories.map((category) => {
              return (
                <div className="col-3" key={category.category_id}>
                  <div className="row submenu-name-wrapper">
                    <div className="col-12 " key={category.category_id}>
                      <Link
                        className="submenu-name"
                        to={`/${category.category_name}`}
                        name={category.category_name}
                        // onClick={onClick}
                      >
                        {category.category_name.replace(/-/g," ")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        // </div>
      // </ul>
    );

    return element;
  }
export default Dropdown;

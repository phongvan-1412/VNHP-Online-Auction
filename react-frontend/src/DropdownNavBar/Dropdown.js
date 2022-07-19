import { Link } from "react-router-dom";
import React from "react";
import $ from "jquery";

import DropdownItem from "./DropdownItem";

const Dropdown = ({ categoriesRoot, categories }) => {
  function onClick(e) {
    console.log($('#'+e.target.id).data("name"));
  }
  return (
    <ul className="services-submenu" style={{position:"absolute"}} >
      <div className="container">
        <div className="row">
          {categoriesRoot.map((category) => {
            return (
              <div className="col-3" key={category.category_id}>
                <div className="row submenu-name-wrapper">
                  <div className="col-12 " key={category.category_id}>
                    <Link
                      className="submenu-name"
                      to={category.category_name}
                      id={category.category_id}
                      data-name={category.category_id}
                      onClick={onClick}
                    >
                      {category.category_name.replace("-", " ")}
                    </Link>
                  </div>
                  <div className="col-12">
                    <DropdownItem
                      categories={categories}
                      category_name={category.category_name}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ul>
  );
};

export default Dropdown;

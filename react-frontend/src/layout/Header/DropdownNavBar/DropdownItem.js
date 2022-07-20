import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const DropdownItem = ({ category_name, categories }) => {
  const cates = categories.filter(
    (cat) => cat.category_root_name === category_name
  );
  function onClick(e) {
    $("#data").data("productbycate", e.target.id);
  }
  return (
    <div className="row submenu-subname">
      {cates.map((category) => {
        return (
          <div className="col-12" key={category.category_id}>
            <Link
              style={{ cursor: "pointer", color: "black" }}
              key={category.category_id}
              to={`/${category.category_root_name}/${category.category_name}`}
              id={category.category_id}
              onClick={onClick}
              className="submenu-subname-name"
            >
              {category.category_name.replace("-", " ")}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default DropdownItem;

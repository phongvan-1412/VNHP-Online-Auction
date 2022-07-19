import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const DropdownItem = ({ category_name, categories }) => {
  const cates = categories.filter(
    (cat) => cat.category_root_name === category_name
  );
  function onClick(e) {
    console.log(e.target.id);
    $("#test-text").val($("#"+e.target.id).data('name'));
  }
  return (
    <div className="row submenu-subname">
      {cates.map((cate) => {
        return (
          <div className="col-12" key={cate.category_id}>
            <Link
              style={{ cursor: "pointer", color: "black" }}
              key={cate.category_id}
              to={`/${cate.category_root_name}/${cate.category_name}`}
              id={cate.category_id}
              data-name={cate.category_id}
              onClick={onClick}
              className="submenu-subname-name"
            >
              {cate.category_name.replace("-", " ")}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default DropdownItem;

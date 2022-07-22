import { Link } from "react-router-dom";
import React from "react";
import $ from "jquery";

const Dropdown = () => {
  function onClick(e) {
    $("#data").data("productbycate", e.target.id);
  }
  const tmp = (
    <ul className="services-submenu" style={{ position: "absolute" }}>
      <div className="container">
        <div className="row submenu-name-wrapper" id="categories-dropdown" >
          
        </div>
      </div>
    </ul>
  );
  function getData() {
    fetch("http://127.0.0.1:8000/api/selectcategories", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        response.map((category) => {
          const tmp = document.createElement("a");
          tmp.innerHTML = category.category_name;
          tmp.className = "col-3 category-name";
          document.getElementById("categories-dropdown").appendChild(tmp);
        });
      });
  }
  getData();

  return tmp;
};

export default Dropdown;

import { Link } from "react-router-dom";
import React from "react";
import $ from "jquery";

const Dropdown = () => {
  // function onClick(e) {
  //   $("#data").data("productbycate", e.target.id);
  // }
  const tmp = (
    <ul className="container">
      <div className="row submenu-name-wrapper" id="categories-dropdown" >
        
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
            tmp.onclick = (e) => {window.location.href = `http://localhost:3000/category/${category.category_name}`} ;

          $("#categories-dropdown").append(tmp);
        });
      });

      fetch("http://127.0.0.1:8000/api/selectcategories")
  }
  getData();

  return tmp;
};

export default Dropdown;

import { Link } from "react-router-dom";
import React, { Component } from "react";

import $ from "jquery";
import DropdownItem from "./DropdownItem";

// const Dropdown = () => {
//   // function onClick(e) {
//   //   $("#data").data("productbycate", e.target.id);
//   // }
//   const tmp = (
//     <ul className="container">
//       <div className="row submenu-name-wrapper" id="categories-dropdown" >

//       </div>
//     </ul>
//   );
//   function getData() {
//     fetch("http://127.0.0.1:8000/api/selectcategories", {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         response.map((category) => {
//           const tmp = document.createElement("a");
//           tmp.innerHTML = category.category_name;
//           tmp.className = "col-3 category-name";
//           tmp.onclick = (e) => {window.location.href = `http://localhost:3000/category/${category.category_name}`} ;

//           $("#categories-dropdown").append(tmp);
//         });
//       });
//   }
//   getData();

//   return tmp;
// };

// export default Dropdown;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/selectcategories", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
<<<<<<< HEAD
        response.map((category) => {
          const tmp = document.createElement("a");
            tmp.innerHTML = category.category_name;
            tmp.className = "col-3 category-name";
            tmp.onclick = (e) => {window.location.href = `http://localhost:3000/category/${category.category_name}`} ;

          $("#categories-dropdown").append(tmp);
        });
=======
        this.setState({ categories: response });
      })
      .catch((err) => {
        console.log(err);
>>>>>>> a210f59db7591ac1b44d32316a1aeded1bb5e986
      });

      fetch("http://127.0.0.1:8000/api/selectcategories")
  }

  render() {
    const element = (
      <ul className="services-submenu">
        <div className="container">
          <div className="row">
            {this.state.categories.map((category, index) => {
              return (
                <div className="col-3" key={category.category_id}>
                  <div className="row submenu-name-wrapper">
                    <div className="col-12 " key={category.category_id}>
                      <Link
                        className="submenu-name"
                        to={category.category_name}
                        name={category.category_name}
                        // onClick={onClick}
                      >
                        {category.category_name.replace("-", " ")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ul>
    );

    return element;
  }
}
export default Dropdown;

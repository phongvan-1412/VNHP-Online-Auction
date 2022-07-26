import { Link } from "react-router-dom";
import React, { Component } from "react";
import $ from "jquery";

const Dropdown = ({categories}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     categories: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch("http://127.0.0.1:8000/api/selectcategories", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.setState({ categories: response });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   fetch("http://127.0.0.1:8000/api/selectcategories");
  // }

    const element = (
      <ul className="services-submenu">
        <div className="container">
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
export default Dropdown;

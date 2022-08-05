import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const ItemSideBar = (props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link collapsed" to={props.url}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </Link>
    </li>
  );
};
class MenuBar extends Component {
  state = {
    menuBar: [
      {
        title: "Customer",
        icon: "fas fa-user",
        url: "/customer",
      },
      {
        title: "Product",
        icon: "fas fa-images",
        url: "/addproduct",
      },

      {
        title: "Category",
        icon: "fas fa-boxes",
        url: "/addcategory",
      },
      {
        title: "Feedback",
        icon: "fab fa-amazon-pay",
        url: "/feedback",
      },
      {
        title: "Bill",
        icon: "fas fa-shopping-cart	",
        url: "/bill",
      },
    ],
  };

  render() {
    return (
      <ul
        className="navbar-nav bg-gradient sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-pen-fancy"></i>
          </div>
          <div className="sidebar-brand-text mx-3">VNHP Auction</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Interface</div>

        {this.state.menuBar.map((menuItem, index) => {
          return (
            <ItemSideBar
              key={index}
              title={menuItem.title}
              icon={menuItem.icon}
              url={menuItem.url}
            />
          );
        })}
        <hr className="sidebar-divider" />
      </ul>
    );
  }
}
export default MenuBar;

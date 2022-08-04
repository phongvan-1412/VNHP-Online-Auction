import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const ItemSideBar = (props) => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link collapsed"
        to="#"
        data-toggle="collapse"
        data-target={props.dataTarget}
        aria-expanded="true"
        aria-controls={props.ariaControl}
      >
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </Link>
      <div id={props.id} className="collapse" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Utilities:</h6>
          <Link className="collapse-item" to={props.url} data-link="#">
            {props.item}
          </Link>
        </div>
      </div>
    </li>
  );
};
class MenuBar extends Component {
  state = {
    menuBar: [
      {
        title: "Customer",
        item: "Customer",
        icon: "fas fa-user",
        dataTarget: "#customer",
        ariaControl: "customer",
        id: "customer",
        url: "/customer",
      },
      {
        title: "Product",
        item: "Add Product",
        icon: "fas fa-images",
        dataTarget: "#product",
        ariaControl: "product",
        id: "product",
        url: "/addproduct",
      },

      {
        title: "Category",
        item: "All Category",
        icon: "fas fa-boxes",
        dataTarget: "#category",
        ariaControl: "category",
        id: "category",
        url: "/addcategory",
      },
      {
        title: "Feedback",
        item: "All feedback ",
        icon: "fab fa-amazon-pay",
        dataTarget: "#feedback",
        ariaControl: "feedback",
        id: "feedback",
        url: "/feedback",
      },
      {
        title: "Bill",
        item: "Bill Detail",
        icon: "fas fa-shopping-cart	",
        dataTarget: "#bill",
        ariaControl: "bill",
        id: "bill",
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

        {this.state.menuBar.map((menuItem) => {
          return (
            <ItemSideBar
              key={menuItem.id}
              title={menuItem.title}
              item={menuItem.item}
              icon={menuItem.icon}
              dataTarget={menuItem.dataTarget}
              ariaControl={menuItem.ariaControl}
              id={menuItem.id}
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

import React, { Component } from 'react'
import { Link } from "react-router-dom"
import $ from "jquery";



class MenuBar extends Component{

    render(){
        const onSiderClicked = (e) => {
            $("#accordionSidebar").slideToggle("slow")
          };
  return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="#">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-pen-fancy"></i>
                </div>
                <div className="sidebar-brand-text mx-3">BuffDog News</div>
            </Link>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item">
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#post" aria-expanded="true" aria-controls="post">
                    <i className="fas fa-pencil-alt"></i>
                    <span>POST</span>
                </Link>
                <div id="post" className="collapse" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link className="collapse-item admin_menu" to="#" data-link="#">All Post</Link>
                        <Link className="collapse-item admin_menu" to="#" data-link="#">Add New</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#media" aria-expanded="true" aria-controls="media">
                    <i className="fas fa-images"></i>
                    <span>MEDIA</span>
                </Link>
                <div id="media" className="collapse" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="#">Add New</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#category" aria-expanded="true" aria-controls="category">
                    <i className="fas fa-boxes"></i>
                    <span>CATEGORY</span>
                </Link>
                <div id="category" className="collapse" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="#">All Category</Link>
                        <Link className="collapse-item" to="#">Add New</Link>

                    </div>
                </div>
            </li>
            <hr className="sidebar-divider"/>
            <div className="text-center d-none d-md-inline">
                <button 
                    className="rounded-circle border-0"  
                    id="sidebarToggle"
                    onClick={onSiderClicked}
                >
                </button>
            </div>
        </ul>
  )
}

}

export default MenuBar
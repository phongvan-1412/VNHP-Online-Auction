import { Link } from "react-router-dom"
import React from 'react'
import axios from "axios";

 const TopBar = () => {
    //  let adminName = "";
     let admin = {};
  
    const isAdminLogin = () => {
      if (localStorage.getItem("admin_info") == null){
        window.location.href = "http://localhost:3000/login";
      }else {
        admin = JSON.parse(localStorage.getItem("admin_info"));
        // adminName = admin.emp_name;
      }
    };
    isAdminLogin();
    console.log(JSON.parse(localStorage.getItem("admin_info")));

    const LogOut = () => {
        const emp_id = admin.emp_id;
        axios
          .post(`http://127.0.0.1:8000/api/logout`, { emp_id })
          .then(function (response) {
            if (response.data > 0) {
              localStorage.removeItem("admin_info");
              window.location.href = "http://localhost:3000/login";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
  return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-0 static-top shadow">

        <form className="form-inline">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
        </form>

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>

        <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hello</span>
                    <img className="img-profile rounded-circle"
                        src="#"/>
                </Link>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <Link className="dropdown-item" to="/adminprofile">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={LogOut}>
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </button>
                </div>
            </li>
        </ul>

    </nav>
  )
}

export default TopBar
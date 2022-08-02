import { Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import Footer from './Footer';
import MenuBar from './MenuBar';
import TopBar from './TopBar';
import DashBoard from "../components/Dashboard/DashBoard";
import Bill from '../components/Bill/Bill';
import TableProduct from '../form/TableProduct';
import TableCategory from '../form/TableCategory';
import AdminProfile from "../components/Profile/AdminProfile";
import "../css/admin1.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.css";

export class Layout extends Component{
  state = {
    admininfo:   {}
  }
  componentDidMount(){
    this.setState({
      admininfo: JSON.parse(localStorage.getItem("admin_info"))
    })
  }
  render(){
    const adminLogin = () => {
      this.setState({
        admininfo: JSON.parse(localStorage.getItem("admin_info"))
      })
    }
    return (
      <div id="wrapper">
          <MenuBar/>
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                  <TopBar />
                  <div className="card-body">
                    <Routes>
                        <Route path='/' element={<DashBoard />}></Route>
                        <Route path='/addcategory' element={<TableCategory />}></Route>
                        <Route path='/addproduct' element={<TableProduct />}></Route>    
                        <Route path='/bill' element={<Bill />}></Route> 
                        <Route path='/adminprofile' element={
                            <AdminProfile 
                              admininfo={this.state.admininfo}
                              UpdateAdminLogin={adminLogin}
                            />
                        }>
                        </Route> 
                    </Routes>
                  </div>
              </div>
              <Footer />
          </div>
      </div>
  
    )
  }

}

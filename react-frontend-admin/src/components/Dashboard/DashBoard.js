import React, { Component } from "react";
import BarChart from "./Chart/BarChart";
import LineChart from "./Chart/LineChart";
import PieChart from "./Chart/PieChart";
import Statistical from "./Statistical/Statistical";
import LoyalCustomer from "./LoyalCustomer/LoyalCustomer";

class DashBoard extends Component{
    render(){
        const isAdminLogin = () => {
            if (localStorage.getItem("admin_info") == null){
              window.location.href = "http://localhost:3000/login";
            }
          };
          
          isAdminLogin();
        return(
            <>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <Statistical />
                <div className="row">
                    <BarChart />
                    <LineChart />
                </div>
                <div className="row">
                    <PieChart />
                    <LoyalCustomer />
                </div>
            </>
        )
    }
}

export default DashBoard
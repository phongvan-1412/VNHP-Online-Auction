import React, { Component } from "react";
import BarChart from "../Chart/BarChart";
import LineChart from "../Chart/LineChart";
class DashBoard extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-6 col-sm-12 border bg-white">
                    <h3 className="text-center">REVENUE 2021</h3>
                    <BarChart />
                </div>
                <div className="col-md-6 col-sm-12 border bg-white">
                    <h3 className="text-center">REVENUE 2018 - 2022</h3>
                    <LineChart />
                </div>
            </div>
        )
    }
}

export default DashBoard
import React, { Component } from "react";
import BarChart from "../Chart/BarChart";
import { LineChart } from "../Chart/LineChart";
class DashBoard extends Component{
    render(){
        return(
                <div className="row">
                    <div className="col-md-6">
                        <BarChart />
                        <strong className="text-center">Revenue from 8/2021 - 7/2022</strong>
                    </div>
                    <div className="col-md-6">
                        <LineChart />
                        <strong className="text-center">Sales from 8/2021 - 7/2022</strong>
                    </div>
                </div>
        )
    }
}

export default DashBoard
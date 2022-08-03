import React, { Component } from 'react'

class Statistical extends Component{
    constructor(props){
        super(props);
        this.state = {
            EarningData: [],
            CustomerData: [],
            SellData: [],
            FeedbackData: []
    }}    
    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/earninglastmonth", {method: "GET",})
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                EarningData: response
            }); 
        })
        .catch(err => {
            console.log(err);
        })
        fetch("http://127.0.0.1:8000/api/countcustomer", {method: "GET",})
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                CustomerData: response
            }); 
        })
        .catch(err => {
            console.log(err);
        })
        fetch("http://127.0.0.1:8000/api/countproduct", {method: "GET",})
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                SellData: response
            }); 
        })
        .catch(err => {
            console.log(err);
        })
        fetch("http://127.0.0.1:8000/api/countfeedback", {method: "GET",})
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                FeedbackData: response
            }); 
        })
        .catch(err => {
            console.log(err);
        })
    };
    render(){
        return (
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Earnings (last month)
                                    </div>
                                        {this.state.EarningData.map((p,index)=>{
                                            return(
                                                <div key={index} className="h5 mb-0 font-weight-bold text-gray-800">
                                                   ${p.revenues}
                                                </div>
                                            )
                                        })}
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Customer
                                    </div>
                                    {this.state.CustomerData.map((p,index)=>{
                                        return(
                                            <div key={index} className="h5 mb-0 font-weight-bold text-gray-800">
                                                {p.amount}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        output sold
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {this.state.SellData.map((p,index)=>{
                                        return(
                                            <div key={index} className="h5 mb-0 font-weight-bold text-gray-800">
                                                {p.amount}
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Feedback</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {this.state.FeedbackData.map((p,index)=>{
                                        return(
                                            <div key={index} className="h5 mb-0 font-weight-bold text-gray-800">
                                                {p.amount}
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistical
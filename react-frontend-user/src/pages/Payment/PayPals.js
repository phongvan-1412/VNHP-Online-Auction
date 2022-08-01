import React, { Component } from "react";
import axios from "axios";

import PayPal from "../Payment/PayPal";

class PayPals extends Component {
    state = { bill_id: 0, customer_id: 0, currentBill: "" }
    
    componentDidMount(){
        const test = window.location.href;
        let billid = test.toString().split('/')[4];
        let customerid = test.toString().split('/')[5];

        this.setState({bill_id: billid})
        this.setState({customer_id: customerid})

        const self = this;
        axios
        .post("http://127.0.0.1:8000/api/currentbill", {billid, customerid})
        .then(function (res) {
            self.setState({currentBill: res.data});
        });
    }
    
    render(){
        return(
            <div className="container">
                <h1>PAYMENT GATEWAY</h1>
                <PayPal totalPayment={parseFloat(this.state.currentBill.bill_payment)}/>
            </div>
        )
    }
    
    
}

export default PayPals;


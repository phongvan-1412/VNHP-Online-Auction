import React, { Component } from "react";
import PayPal from "../Payment/PayPal";

class PayPals extends Component {
    state =[{bill_id:0}]
    
    componentDidMount(){
        const test = new URLSearchParams(window.location.href)
        let id = test.toString().split('id=')[1];
        this.setState({bill_id: id})
    }
    render(){
        console.log(this.state.bill_id)

        return(
            <div className="container">
                <h1>PAYMENT GATEWAY</h1>
                <PayPal  />
            </div>
        )
    }
    
    
}

export default PayPals;
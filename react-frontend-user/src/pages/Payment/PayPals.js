import React, { Component } from "react";
import axios from "axios";

import PayPal from "../Payment/PayPal";

class PayPals extends Component {
  state = { currentBill: [] };

  componentDidMount() {
    const test = window.location.href;
    let billid = test.toString().split("/")[4];

    const self = this;
    axios
      .post("http://127.0.0.1:8000/api/currentbill", { billid })
      .then(function (res) {
        self.setState({ currentBill: res.data });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>PAYMENT GATEWAY</h1>
        <PayPal
          currentBill={this.state.currentBill}
        />
      </div>
    );
  }
}

export default PayPals;

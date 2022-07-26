import React, { Component } from "react";
import { AddBill } from "./AddBill";
import $ from "jquery";

class Bill extends Component{
  
  constructor(props) { 
    super(props); 
    this.state = { 
      ProductData: [], 
    }} 
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/selectbill", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
          this.setState({
            ProductData: response
          }); 
        })
        .catch(err => {
          console.log(err);
        })
      };

      render(){
        return(
            <div className="container">
              <div className="float-right mb-3">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#con-close-modal"
                >
                  Add new
                </button>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Payment code</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody id="bill-records">
                {this.state.ProductData.map((p,index) => {
                  return(
                    <tr>
                      <td></td>
                      <td>{p.product_id}</td>
                      <td>{p.bill_date}</td>
                      <td>{p.bill_payment}</td>
                      <td>{p.customer_id}</td>
                      <td>{p.payment_mode_id}</td>
                      <td>{p.bill_status}</td>
                    </tr>
                  )

                })}
                </tbody>
              </table>
              <AddBill />
            </div>
        )  
      }
}
 

export default Bill;

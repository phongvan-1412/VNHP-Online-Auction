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
    fetch("http://127.0.0.1:8000/api/getaccount", {
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
        let i = 1
        function Search() {
          var value = $("#search").val().toLowerCase();
          $("#bill-records tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        };
        return(
            <div className="container-fluid">
                <button
                  className="btn btn-success mb-3 "
                  data-toggle="modal"
                  data-target="#con-close-modal"
                >
                  Add new
                </button>
             
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Bill</h6>
                </div>
                <div className="card-body">
                <input className="form-control col-3 mb-3"
                      id="search"
                      type="text" 
                      onKeyUp={Search} 
                      placeholder="Search.."
                 />
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" style={{width: "100%"}} cellSpacing="0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Customer</th>
                          <th>Payment code</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th></th>
                          <th>Product</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Customer</th>
                          <th>Payment code</th>
                          <th>Status</th>
                        </tr>
                      </tfoot>
                      <tbody id="bill-records">
                        {this.state.ProductData.map((p,index) => {
                          return(
                            <tr>
                              <td key={index}>{i++}</td>
                              <td>{p.product_name}</td>
                              <td>{p.bill_date}</td>
                              <td>{p.bill_payment}</td>
                              <td>{p.customer_name}</td>
                              <td>{p.payment_mode_id}</td>
                              <td>{p.bill_status}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>    
              <AddBill />
            </div>
        )  
      }
}
 

export default Bill;

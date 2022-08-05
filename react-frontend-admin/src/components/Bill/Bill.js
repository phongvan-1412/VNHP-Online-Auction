import React, { Component } from "react";
import { AddBill } from "./AddBill";
// import BillDetail from "./BillDetail";
import $ from "jquery";
import "../../css/billdetail.css";

class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BillData: [],
      Detail: {},

    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/selectbill", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          BillData: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let i = 1;
    let subtotal = Number(this.state.Detail.aution_price);
    let vat = Number(this.state.Detail.aution_price/10);
    let total = subtotal + vat
    function Search() {
      var value = $("#search").val().toLowerCase();
      $("#bill-records tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    }
    const onClick = (e) => {
      this.state.BillData.forEach(bill => {
        if(bill.bill_id == e.target.value){
          this.setState({ Detail: bill })
        }
      })
    };
    return (
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
            <input
              className="form-control col-3 mb-3"
              id="search"
              type="text"
              onKeyUp={Search}
              placeholder="Search.."
            />
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                style={{ width: "100%" }}
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="bill-records">
                  {this.state.BillData.map((p, index) => {
                    return (
                      <tr>
                        <td key={index}>{i++}</td>
                        <td>{p.product_name}</td>
                        <td>{p.bill_date}</td>
                        <td>{p.aution_price}</td>
                        <td>{p.customer_name}</td>
                        <td className="text-center">{p.bill_status == 1 ? (
                          <h5>
                            <span className="badge badge-success">PAID</span>                           
                          </h5>
                        ) : (
                          <h5>
                            <span className="badge badge-danger">UNPAID</span>
                          </h5>
                        )}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-toggle="modal"
                            id="detail"
                            data-target=".bd-example-modal-lg"
                            onClick={onClick}
                            value={p.bill_id}
                          >
                            Detail
                          </button>
                          <div
                            className="modal fade bd-example-modal-lg"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="myLargeModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">                            
                              <div className="modal-content">
                                <div className="card-body">
                                  <div className="container bootstrap snippets bootdeys">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div className="panel panel-default invoice" id="invoice">
                                          <div className="panel-body">
                                            <div className="invoice-ribbon">
                                              {this.state.Detail.bill_status == 1 ? (
                                                <div className="ribbon-inner">
                                                  PAID
                                                </div>
                                              ):(
                                                <div className="ribbon-inner-1">
                                                  UNPAID
                                                </div>
                                              )}
                                            </div>
                                            <div className="row">
                                              <div className="col-sm-6 top-left">
                                                <h3>VNHP Auction</h3>
                                              </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                              <div className="col-md-6 from">
                                                <h6 className="lead marginbottom">From : VNHP Auction</h6>
                                                <small>35/6 D5, Binh Thanh district</small><br/>
                                                <small>HCMC, Viet Nam</small><br/>
                                                <small>Phone: 090-979-9099</small><br/>
                                                <small>Email: vnhpauction@aptech.com</small>
                                              </div>

                                              <div className="col-md-6 text-right to">
                                                <h6 className="lead marginbottom payment-info">To : {this.state.Detail.customer_name}</h6>
                                                <small>{this.state.Detail.customer_address}</small><br/>
                                                <small>Phone: {this.state.Detail.customer_contact}</small><br/>
                                                <small>Email: {this.state.Detail.customer_email}</small><br/>
                                                <small>Date: {this.state.Detail.bill_date}</small><br/>
                                              </div>
                                            </div>
                                            <div className="row table-row">
                                              <table className="table table-striped">
                                                <thead>
                                                  <tr>
                                                    <th className="text-center" style={{width:"5%"}}>
                                                      #
                                                    </th>
                                                    <th style={{width:"50%"}}>Item</th>
                                                    <th className="text-right" style={{width:"15%"}}>
                                                      Quantity
                                                    </th>
                                                    <th className="text-right" style={{width:"15%"}}>
                                                      Unit Price
                                                    </th>
                                                    <th className="text-right" style={{width:"15%"}}>
                                                      Total Price
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className="text-center">1</td>
                                                    <td >
                                                      <div className="row">
                                                        <img
                                                          className="col-4"
                                                          src={
                                                            "http://localhost:8000/ProductImg/" +
                                                            this.state.Detail.product_thumbnail_img_name
                                                          }
                                                          alt="Image Description"
                                                          width={60}
                                                        />
                                                        <div className="col-8">
                                                          {this.state.Detail.product_name}
                                                        </div>  
                                                      </div>
                                                                                                     
                                                    </td>
                                                    <td className="text-right">1</td>
                                                    <td className="text-right">{this.state.Detail.aution_price}</td>
                                                    <td className="text-right">{this.state.Detail.aution_price}</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>

                                            <div className="row">
                                              <div className="col-sm-6 margintop text-bottom">
                                                <h5 className="text-bottom">VNHP Auction Team</h5>
                                              </div>
                                              <div className="col-sm-6 text-right float-end pull-right invoice-total">
                                                <p>Subtotal :${this.state.Detail.aution_price}</p>
                                                <p>VAT (10%) : ${this.state.Detail.aution_price /10} </p>
                                                <p>Total : ${total} </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <AddBill />
        {/* <BillDetail /> */}
      </div>
    );
  }
}

export default Bill;

import React, { Component } from "react";
import "../../css/billdetail.css";

class BillDetail extends Component {
  render() {
    return (
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
                          <div className="ribbon-inner">PAID</div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 top-left">
                            <h3>VNHP Auction</h3>
                          </div>

                          <div className="col-sm-6 top-right">
                            <h3 className="marginright">INVOICE-1234578</h3>
                            <span className="marginright">14 April 2014</span>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-4 from">
                            <h6 className="lead marginbottom">From : Dynofy</h6>
                            <small>350 Rhode Island Street</small><br/>
                            <small>Suite 240, San Francisco</small><br/>
                            <small>California, 94103</small><br/>
                            <small>Phone: 415-767-3600</small><br/>
                            <small>Email: contact@dynofy.com</small>
                          </div>

                          <div className="col-md-4 text-center to">
                            <h6 className="lead marginbottom">To : John Doe</h6>
                            <small>425 Market Street, Suite 2200</small><br/>
                            <small>San Francisco, California, 94105 </small><br/>
                            <small>Phone: 415-676-3600</small><br/>
                            <small>Email: john@doe.com</small>
                          </div>

                          <div className="col-sm-4 text-right payment-details">
                            <h6 className="lead marginbottom payment-info">
                              Payment details
                            </h6>
                            <small>Date: 14 April 2014</small><br/>
                            <small>VAT: DK888-777 </small><br/>
                            <small>Total Amount: $1019</small><br/>
                            <small>Account Name: Flatter</small>
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
                                <td>Flatter Theme</td>
                                <td className="text-right">10</td>
                                <td className="text-right">$18</td>
                                <td className="text-right">$180</td>
                              </tr>
                              <tr>
                                <td className="text-center">2</td>
                                <td>Flat Icons</td>
                                <td className="text-right">6</td>
                                <td className="text-right">$59</td>
                                <td className="text-right">$254</td>
                              </tr>
                              <tr>
                                <td className="text-center">3</td>
                                <td>Wordpress version</td>
                                <td className="text-right">4</td>
                                <td className="text-right">$95</td>
                                <td className="text-right">$285</td>
                              </tr>
                              <tr className="last-row">
                                <td className="text-center">4</td>
                                <td>Server Deployment</td>
                                <td className="text-right">1</td>
                                <td className="text-right">$300</td>
                                <td className="text-right">$300</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="row">
                          <div className="col-sm-6 margintop text-bottom">
                            <h3 className="text-bottom">VNHP Auction Team</h3>
                          </div>
                          <div className="col-sm-6 text-right float-end pull-right invoice-total">
                            <p>Subtotal : $1019</p>
                            <p>Discount (10%) : $101 </p>
                            <p>VAT (8%) : $73 </p>
                            <p>Total : $991 </p>
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
    );
  }
}

export default BillDetail;

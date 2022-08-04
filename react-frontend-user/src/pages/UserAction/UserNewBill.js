import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserNewBill = ({ newBill }) => {
  function Search() {
    var value = $("#search").val().toLowerCase();
    $("#bill-records tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }
  let i = 1;
  if (newBill.length <= 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-2">
            <span>No record found</span>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold">New bill</h4>
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
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Total Payment</th>
                  <th>Aution Day</th>
                  <th>Pay Now</th>
                </tr>
              </thead>
              <tbody id="bill-records">
                {newBill.map((nb, index) => {
                  return (
                    <tr key={index}>
                      <td>{i++}</td>
                      <td>{nb.product_name}</td>
                      <td>{nb.bill_payment}</td>
                      <td>{nb.bill_date}</td>
                      <td>
                        <Link
                          to={`/paymentgateway/${nb.bill_id}`}
                          id="btn-payment"
                        >
                          Payment
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserNewBill;

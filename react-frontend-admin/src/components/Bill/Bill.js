import React, { Component } from "react";
import { AddBill } from "./AddBill";
import $ from "jquery";

const Bill = () => {
  const table = (
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
        <tbody id="bill-records"></tbody>
      </table>
      <AddBill />
    </div>
  );
    let i = 1
  function getData() {
    fetch("http://127.0.0.1:8000/api/selectbill", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        response.map((bill) => {
            const tr = document.createElement("tr");
            tr.id = "tr" +i;
            
            const id = document.createElement("td");
            id.innerHTML = i;
            $("#tr"+i).append(id);

            const product = document.createElement("td");
            product.innerHTML = bill.product_id;
            $("#tr"+i).append(product);

            const date = document.createElement("td");
            date.innerHTML = bill.bill_date;
            $("#tr"+i).append(date);

            const total = document.createElement("td");
            total.innerHTML = bill.bill_payment;
            $("#tr"+i).append(total);

            const customer = document.createElement("td");
            customer.innerHTML = bill.customer_id;
            $("#tr"+i).append(customer);

            const paymentmode = document.createElement("td");
            paymentmode.innerHTML = bill.payment_mode_id;
            $("#tr"+i).append(paymentmode);

            const status = document.createElement("td");
            status.innerHTML = bill.bill_status;
            $("#tr"+i).append(status);
            i++
          $("#bill-records").append(tr);
        });
      });
  }
  getData();
  return table;
};

export default Bill;

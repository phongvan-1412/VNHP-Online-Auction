import React from "react";

function UserBillHistory({currentBillHistory}) {
  function Search() {
    var value = $("#search").val().toLowerCase();
    $("#bill-records tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }
  let i = 1;
  return (
    <div className="container">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold">Bill History</h4>
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
                  <th>Bill id</th>
                  <th>Payment Id</th>
                  <th>Total Payment</th>
                  <th>Payment Type</th>
                  <th>Product Name</th>
                  <th>Pay Day</th>
                </tr>
              </thead>
              {/* <tfoot>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Date</th>
                <th>Total</th>
                <th>Customer</th>
                <th>Payment code</th>
                <th>Status</th>
              </tr>
            </tfoot> */}
              <tbody id="bill-records">
                {currentBillHistory.map((bh, index) => {
                return (
                  <tr key={index}>
                    <td>{i++}</td>
                    <td>{bh.bill_id}</td>
                    <td>{bh.payment_mode_id}</td>
                    <td>{bh.bill_payment}</td>
                    <td>{bh.payment_mode_type}</td>
                    <td>{bh.product_name}</td>
                    <td>{bh.bill_date}</td>
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
}

export default UserBillHistory;

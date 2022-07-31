import React from "react";

function UserNewBill({currentNewBill}) {
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
                {currentNewBill.map((nb, index) => {
                return (
                  <tr>
                    <td key={index}>{i++}</td>
                    <td>{nb.product_name}</td>
                    <td>{nb.bill_payment}</td>
                    <td>{nb.bill_date}</td>
                    <td><button id="btn-payment"onClick={() => {console.log(nb.bill_id)}}>Payment</button></td>
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
export default UserNewBill;

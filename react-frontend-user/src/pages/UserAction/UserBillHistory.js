import React from "react";

function UserBillHistory({ billHistory }) {
  function Search() {
    var value = $("#search").val().toLowerCase();
    $("#bill-records tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }
  let i = 1;
  if (billHistory.length <= 0) {
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
                  <th>Payer Id</th>
                  <th>Total Payment</th>
                  <th>Product Name</th>
                  <th>Pay Day</th>
                </tr>
              </thead>
              <tbody id="bill-records">
                {billHistory.map((bh, index) => {
                  return (
                    <tr key={index}>
                      <td>{i++}</td>
                      <td>{bh.payment_mode_id}</td>
                      <td>{bh.bill_payment}</td>
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

import React from "react";

function UserAutionHistory({ autionHistory }) {
  function Search() {
    var value = $("#search").val().toLowerCase();
    $("#aution-history tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }
  let i = 1;
  if (autionHistory.length <= 0) {
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
          <h4 className="m-0 font-weight-bold">Aution History</h4>
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
                  <th>Product</th>
                  <th>Aution Bid Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody id="aution-history">
                {autionHistory.map((ah, index) => {
                  return (
                    <tr key={index}>
                      <td>{i++}</td>
                      <td>{ah.product_name}</td>
                      <td>{ah.aution_price}</td>
                      <td>{ah.aution_day}</td>
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
export default UserAutionHistory;

import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function UserAutionHistory({ autionHistory }) {
  function Search() {
    var value = $("#search").val().toLowerCase();
    $("#aution-history tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }
  let i = 1;

  const [currentPage, setCurrentPage] = useState(1);

  if(currentPage > 1)
  {
    i = 1;
  }
  const productsPerPage = 10;

  const indexOfLastPage = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const currentProducts = autionHistory.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(autionHistory.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number) => {
    setCurrentPage(number);
  };

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
                {currentProducts.map((ah, index) => {
                  return (
                    <tr key={index}>
                      <td>{(currentPage - 1) * 10 + i++}</td>
                      <td>
                        {ah.product_name
                          ? ah.product_name.replace(/-/g, " ")
                          : null}
                      </td>
                      <td>$ {parseInt(ah.aution_price).toLocaleString()}</td>
                      <td>{new Date(ah.aution_day).toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
            <ul className="pagination">
              {pageNumbers.map((number, index) => (
                <li key={index} className="page-item">
                  <Link
                    to="#"
                    className="page-link"
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserAutionHistory;

import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

const UserNewBill = ({ newBill }) => {
  function Search() {
    var value = $("#search").val().toLowerCase();
    $("#bill-records tr").filter(function () {
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
  const currentProducts = newBill.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(newBill.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number) => {
    setCurrentPage(number);
  };

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
                {currentProducts.map((nb, index) => {
                  return (
                    <tr key={index}>
                      <td>{(currentPage - 1) * 10 + i++}</td>
                      <td>{nb.product_name ? nb.product_name.replace(/-/g," ") : null}</td>
                      <td>$ {parseInt(nb.bill_payment).toLocaleString()}</td>
                      <td>{new Date(nb.bill_date).toLocaleString()}</td>
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
};
export default UserNewBill;

import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import AddProduct from "./AddProduct";
import "../css/switch.css";

class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
      productPaginate: [],
      categories: [],
      currentProduct: {},
      currentCategory: "",
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/addproducttable", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productPaginate: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    const self = this;
    axios
      .post(`http://127.0.0.1:8000/api/paginateproducttable`, { paginate: 1 })
      .then(function (response) {
        self.setState({
          ProductData: response.data,
        });
      });

    fetch("http://127.0.0.1:8000/api/selectcategories", { method: "GET" })
      .then((categories) => categories.json())
      .then((categories) => {
        this.setState({ categories: categories });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let i = 1;
    const onClick = (a) => {
      this.state.ProductData.map((product) => {
        if (product.product_id == a.target.value) {
          this.setState({ currentProduct: product });
          this.state.categories.map((category) => {
            if (product.category_id == category.category_id) {
              this.setState({ currentCategory: category.category_name });
            }
          });
        }
      });
    };

    let category_id = "";

    const categoryOnChange = (e) => {
      this.state.categories.forEach((category) => {
        if (
          category.category_name == e.target.value.trim().replace(/ /g, "-")
        ) {
          category_id = category.category_id;
          $("#check-category-name-result").text("");
          // validCategoryName = true;
          return;
        }
      });
    };

    const onPaginate = (e) => {
      const self = this;
      axios
        .post(`http://127.0.0.1:8000/api/paginateproducttable`, {
          paginate: e.target.value,
        })
        .then(function (response) {
          self.setState({
            ProductData: response.data,
          });
        });
    };
    const updateProduct = () => {
      const self = this;
      axios
        .post(`http://127.0.0.1:8000/api/paginateproducttable`, { paginate: 1 })
        .then(function (response) {
          self.setState({
            ProductData: response.data,
          });
        });
    };
    const changeproduct = (e) => {
      const product_id = e.target.name;
      const product_name = $("#edit-product-name").val().replace(/ /g, "-");
      const product_start_price = $("#edit-product-start-price").val();
      const product_start_aution_day = $(
        "#edit-product-start-aution-day"
      ).val();
      const product_end_aution_day = $("#edit-product-end-aution-day").val();

      const product = {
        product_id,
        product_name,
        category_id,
        product_start_price,
        product_start_aution_day,
        product_end_aution_day,
      };

      axios
        .post(`http://127.0.0.1:8000/api/editproduct`, product)
        .then(function (response) {
          console.log(response.data);
          if (response.data > 0) {
            $("#edit-product-result").text("Edit product successfully.");
            $("#edit-product-result").css("color", "green");
            updateProduct();
          } else {
            $("#edit-product-result").text("Edit product fail.");
            $("#edit-product-result").css("color", "red");
          }
        });
    };

    const onStatusChange = (e) => {
      axios
        .post(`http://127.0.0.1:8000/api/changeproductstatus`, {
          product_id: e.target.value,
          product_status: e.target.checked ? 1 : 0,
        })
        .then(function (response) {
          if (response.data > 0) {
            updateProduct();
          } else {
          }
        });
    };

    function Search() {
      var value = $("#search").val().toLowerCase();
      $("#product-records tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    }

    return (
      <div className="container-fluid">
        <button
          className="btn btn-success mb-3 "
          data-toggle="modal"
          data-target="#add-product-modal"
        >
          Add new
        </button>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Product</h6>
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
                className="table table-striped"
                id="dataTable"
                style={{ width: "100%" }}
                cellPadding="0"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Img</th>
                    <th>Product Name</th>
                    <th>Start Price</th>
                    <th>End Price</th>
                    <th>Start Aution Day</th>
                    <th>End Aution Day</th>
                    <th>Auction Status</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody id="product-records">
                  {this.state.ProductData.map((h, index) => {
                    return (
                      <tr key={index}>
                        <td>{i++}</td>

                        <td>
                          <img
                            className="imgcategory"
                            style={{ width: "100px", height: "100px" }}
                            src={require(`../../../LaravelAPI/public/ProductImg/${h.product_thumbnail_img_name}`)}
                          />
                        </td>

                        <td>{h.product_name.replace(/-/g, " ")}</td>
                        <td>{h.product_start_price}</td>
                        <td>{h.product_price_aution}</td>
                        <td>
                          {new Date(
                            h.product_start_aution_day
                          ).toLocaleString()}
                        </td>
                        <td>
                          {new Date(h.product_end_aution_day).toLocaleString()}
                        </td>
                        <td>
                          {h.product_status == 0 ? (
                            <h5>
                              <span className="badge badge-secondary">
                                Deactive
                              </span>
                            </h5>
                          ) : h.product_status == 1 ? (
                            <h5>
                              <span className="badge badge-primary">
                                Active
                              </span>
                            </h5>
                          ) : h.product_status == 2 ? (
                            <h5>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </h5>
                          ) : (
                            <h5>
                              <span className="badge badge-success">
                                Pending payment
                              </span>
                            </h5>
                          )}
                        </td>
                        <td>
                          {h.product_status == 1 ? (
                            <label className="switch">
                              <input
                                type="checkbox"
                                defaultChecked
                                onChange={onStatusChange}
                                value={h.product_id}
                              />
                              <span className="slider round"></span>
                            </label>
                          ) : (
                            <label className="switch">
                              <input
                                type="checkbox"
                                onChange={onStatusChange}
                                value={h.product_id}
                              />
                              <span className="slider round"></span>
                            </label>
                          )}
                        </td>
                        <td>
                          <div className="form-action">
                            <button
                              className="btn btn-dark"
                              type="button"
                              data-toggle="modal"
                              data-target="#con-close-modal2"
                              id="btn-edit-product"
                              value={h.product_id}
                              onClick={onClick}
                              style={{ color: "white" }}
                            >
                              Edit
                            </button>
                          </div>
                          <div
                            className="modal fade "
                            id="con-close-modal2"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="myLargeModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Edit Product</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body p-4">
                                  <div id="edit-product-result"></div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label
                                          className="control-label"
                                          htmlFor="id"
                                        >
                                          Product Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue={
                                            this.state.currentProduct
                                              .product_name
                                              ? this.state.currentProduct.product_name.replace(
                                                  /-/g,
                                                  " "
                                                )
                                              : ""
                                          }
                                          id="edit-product-name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label
                                          className="control-label"
                                          htmlFor="id"
                                        >
                                          Category Name
                                        </label>
                                        <select
                                          className="form-control"
                                          onChange={categoryOnChange}
                                        >
                                          <option>
                                            {this.state.currentCategory
                                              ? this.state.currentCategory.replace(
                                                  /-/g,
                                                  " "
                                                )
                                              : "Please choose category ..."}
                                          </option>
                                          {this.state.categories.map(
                                            (category, index) => {
                                              if (
                                                category.category_name !=
                                                this.state.currentCategory
                                              ) {
                                                return (
                                                  <option key={index}>
                                                    {category.category_name.replace(
                                                      /-/g,
                                                      " "
                                                    )}
                                                  </option>
                                                );
                                              }
                                            }
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <label className="control-label">
                                        Start Price
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control "
                                        defaultValue={
                                          this.state.currentProduct
                                            .product_start_price
                                        }
                                        id="edit-product-start-price"
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label">
                                          Start Aution Day
                                        </label>
                                        <input
                                          className="form-control "
                                          id="edit-product-start-aution-day"
                                          defaultValue={
                                            this.state.currentProduct
                                              .product_start_aution_day
                                              ? new Date(
                                                  this.state.currentProduct.product_start_aution_day
                                                )
                                                  .toISOString()
                                                  .slice(0, 16)
                                              : ""
                                          }
                                          type="datetime-local"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label">
                                          End Aution Day
                                        </label>
                                        <input
                                          className="form-control "
                                          id="edit-product-end-aution-day"
                                          defaultValue={
                                            this.state.currentProduct
                                              .product_end_aution_day
                                              ? new Date(
                                                  this.state.currentProduct.product_end_aution_day
                                                )
                                                  .toISOString()
                                                  .slice(0, 16)
                                              : ""
                                          }
                                          type="datetime-local"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="modal-footer">
                                    <button
                                      className="btn btn-secondary waves-effect"
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <input
                                      type="submit"
                                      className="btn btn-info waves-effect waves-light"
                                      onClick={changeproduct}
                                      name={
                                        this.state.currentProduct.product_id
                                      }
                                      value="Update Product"
                                    />
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
              {this.state.productPaginate.map((paginate, index) => {
                return (
                  <button
                    className="btn btn-outline-dark align-center
                  "
                    key={index}
                    value={paginate}
                    onClick={onPaginate}
                  >
                    {paginate}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AddProduct categories={this.state.categories} />
      </div>
    );
  }
}

export default TableProduct;

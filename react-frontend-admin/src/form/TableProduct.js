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
      categories: [],
      productName: "",
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/addproducttable", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          ProductData: response,
        });
      })
      .catch((err) => {
        console.log(err);
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
      this.setState({ productName: a.target.value });
    };
    let category_id = "";

    const categoryOnChange = (e) => {
      this.state.categories.forEach((category) => {
        if (category.category_name == e.target.value.trim().replace(/ /g, "-")) {
          category_id = category.category_id;
          // $("#check-category-name-result").text(e.target.value + " is valid.");
          // $("#check-category-name-result").css("color", "green");
          // validCategoryName = true;
          return;
        }
      });
    };
    const changeproduct = () => {
      const product_name = $('#edit-product-name').val().replace(/ /g,"-");
      const product_start_price = $('#edit-product-start-price').val();
      const product_start_aution_day = $('#edit-product-start-aution-day').val();
      const product_end_aution_day = $('#edit-product-end-aution-day').val();

      const product = {product_name,category_id,product_start_price,product_start_aution_day,product_end_aution_day};

      axios
        .post(`http://127.0.0.1:8000/api/editproduct`, product)
        .then(function (response) {
          if (response.data > 0) {
            $("#edit-product-result").text("Edit product successfully.");
            $("#edit-product-result").css("color", "green");
          } else {
            $("#edit-product-result").text("Edit product fail.");
            $("#edit-product-result").css("color", "red");
          }
        });
    };
    return (
      <div className="container-fluid">
        <button
          className="btn btn-success mb-3 "
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Add new
        </button>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Product</h6>
          </div>
          <div className="card-body">
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
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
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
                        <td>{h.product_start_aution_day}</td>
                        <td>{h.product_end_aution_day}</td>
                        <td>
                          {h.product_status == 1 ? (
                            <label className="switch">
                              <input type="checkbox" defaultChecked />
                              <span className="slider round"></span>
                            </label>
                          ) : (
                            <label className="switch">
                              <input type="checkbox" />
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
                              value={h.product_name}
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
                                  <h4 className="modal-title">Add Product</h4>
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
                                          value={this.state.productName.replace(
                                            /-/g,
                                            " "
                                          )}
                                          id="edit-product-name"
                                          disabled
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
                                          defaultValue={"Choose Category"}
                                        >
                                          <option hidden>
                                            Please Choose Category...{" "}
                                          </option>
                                          {this.state.categories.map(
                                            (category,index) => {
                                              return (
                                                <option key={index} >
                                                  {category.category_name.replace(
                                                    /-/g,
                                                    " "
                                                  )}
                                                </option>
                                              );
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
                                          type="date"
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
                                          type="date"
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
            </div>
          </div>
        </div>
        <AddProduct categories={this.state.categories} />
      </div>
    );
  }
}

export default TableProduct;

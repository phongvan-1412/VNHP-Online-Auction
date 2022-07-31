import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import AddProduct from "./AddProduct";

class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
      categories: [],
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
                    <th>Information</th>
                    <th>Ingredients</th>
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
                      <tr>
                        <td key={index}>{i++}</td>
                        <td>{h.product_thumbnail_img_name}</td>
                        <td>{h.product_name}</td>
                        <td>{h.product_information}</td>
                        <td>{h.product_ingredients}</td>
                        <td>{h.product_start_price}</td>
                        <td>{h.product_price_aution}</td>
                        <td>{h.start_aution_day}</td>
                        <td>{h.product_end_aution}</td>
                        <td>
                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class={"custom-control-input"}
                              id="customSwitch1"
                              value={h.product_status == 1 ?? "on"}
                            />
                            <label
                              class="custom-control-label"
                              for="customSwitch1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="form-action">
                            <button className="btn btn-secondary">Edit</button>
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
        <AddProduct categories={this.state.categories}/>
      </div>
    );
  }
}

export default TableProduct;

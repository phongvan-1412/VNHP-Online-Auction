import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import AddProduct from "./AddProduct";
import "../css/switch.css"
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
    const onClick = (a) => {
      console.log(a.target.value);
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
                    const changeproduct = () => {
                      const changeproductname = h.product_name;
                      console.log(changeproductname)
                    };
                    return (
                      <tr>
                        <td key={index}>{i++}</td>

                        <td>

                          <img className="imgcategory" style={{ width: "100px", height: "100px" }}
                            src={require(`../../../LaravelAPI/public/ProductImg/${h.product_thumbnail_img_name}`)}
                          />
                        </td>

                        <td>{h.product_name.replace(/-/g," ")}</td>
                        <td>{h.product_start_price}</td>
                        <td>{h.product_price_aution}</td>
                        <td>{h.start_aution_day}</td>
                        <td>{h.product_end_aution}</td>
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
                              style={{color:"white"}}
                            >Edit
                            </button>
                          </div>
                          <div class="modal fade " id="con-close-modal2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                              <div class="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Add Product</h4>
                                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body p-4">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Product Name</label>
                                        <input type="text" className="form-control" id="input-product_name" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Category Name</label>
                                        <select className="form-control " >
                                          <option id="input-category-id">{1023}</option>
                                          <option id="input-category-id">{1024}</option>
                                          <option id="input-category-id">{1025}</option>
                                          <option id="input-category-id">{1026}</option>
                                          <option id="input-category-id">{1027}</option>
                                          <option id="input-category-id">{1028}</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Images</label>
                                        <input className="form-control " type="file" id="input-imgs-product" required />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="control-label">Start Price</label>
                                      <input className="form-control " id="input-price1-product" />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Images 1</label>
                                        <input className="form-control " type="file" id="input-img1-product" required />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label">Start Aution Day</label>
                                        <input className="form-control " id="input-start-aution-product" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Images 2</label>
                                        <input className="form-control " type="file" id="input-img2-product" required />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label">End Aution Day</label>
                                        <input className="form-control " id="input-end-aution-product" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Images 3</label>
                                        <input className="form-control " type="file" id="input-img3-product" required />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Status</label>
                                        <label className="switch">
                                          <input name="category_status" type="checkbox" id="input-status-product" />
                                          <span className="slider round"></span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Information</label>
                                        <textarea className="form-control " id="input-information-product" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Ingredients</label>
                                        <textarea className="form-control " id="input-ingredients-product" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Instruction use</label>
                                        <textarea className="form-control " id="input-instruction_use-product" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="id">Instruction store</label>
                                        <textarea className="form-control " id="input-instruction_store-product" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                    <input type="submit" className="btn btn-info waves-effect waves-light" onClick={changeproduct} value="Create" />
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

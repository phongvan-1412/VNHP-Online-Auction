import React, { Component } from "react";
import $ from "jquery";
import AddCategory from "./AddCategory";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryData: [],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/addcategorytable", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          CategoryData: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let i = 1;
    // change
    const onClick = (e) => {
      console.log(e.target.value);
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
            <h6 className="m-0 font-weight-bold text-primary">Category</h6>
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
                    <th>Category Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.CategoryData.map((h, index) => {
                    const change = () => {
                      const changecategory = h.category_name;
                      console.log(changecategory);
                    };
                    return (
                      <tr>
                        <td key={index}>{i++} </td>
                        <td>
                         
                          <img className="imgcategory" style={{width:"100px", height:"100px"}}
                            src={require(`../../../LaravelAPI/public/CategoryImg/${h.category_img_name}`)}
                          />
                        </td>
                        <td>{h.category_name.replace(/-/g,' ')}</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        {/*  */}
                        <td>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-dark mr-1"
                              data-toggle="modal"
                              data-target="#con-close-modal1"
                              id="btn-edit-category"
                              value={h.category_name}
                              onClick={onClick}
                              style={{color:"white"}}
                            >
                              Edit
                            </button>
                            <div
                              className="modal fade "
                              id="con-close-modal1"
                              tabindex="-1"
                              role="dialog"
                              aria-labelledby="myLargeModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h4 className="modal-title">
                                      Change Category
                                    </h4>
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
                                    <div className="row">
                                      <div className="container">
                                        <div className="form-group">
                                          <label
                                            className="control-lable admin-category-label"
                                            htmlFor="id"
                                          >
                                            Category Name
                                          </label>
                                          <input
                                            className="form-control"
                                            id="category_add_name"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label
                                            className="control-lable admin-category-label"
                                            htmlFor="id"
                                          >
                                            Img
                                          </label>
                                          <input
                                            className="form-control"
                                            type="file"
                                            id="input-img-category"
                                          />
                                        </div>
                                        <div className="form-group">
                                          <input
                                            type="checkbox"
                                            style={{ width: "50px" }}
                                          />
                                          <label className="control-lable admin-category-label">
                                            Status
                                          </label>
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
                                        onClick={change}
                                        value="Create"
                                      />
                                    </div>
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
        <AddCategory />
      </div>
    );
  }
}

export default Category;

import React, { Component } from "react";
import $ from "jquery";
import AddCategory from "./AddCategory";
import axios from "axios";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryData: [],
      categoryName: "",
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

    const onClick = (e) => {
      const category = {
        category_name: e.target.name,
        category_status: e.target.checked,
      };
      axios
        .post(`http://127.0.0.1:8000/api/changecategorystatus`, category)
        .then(function (response) {
          if (response.data > 0) {
            alert(
              "Update " +
                category.category_name.replace(/-/g, " ") +
                " status successfully."
            );
          } else {
            alert(
              "Update " +
                category.category_name.replace(/-/g, " ") +
                " status fail."
            );
          }
        });
    };
    const onEditClick = (e) => {
      this.setState({ categoryName: e.target.value.replace(/-/g, " ") });
    };

    const onSaveEditClick = () => {};
    return (
      <div className="container-fluid">
        <button
          className="btn btn-success mb-3 "
          data-toggle="modal"
          data-target="#add-category-modal"
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
                    return (
                      <tr key={index}>
                        <td>{i++} </td>
                        <td>
                          <img
                            className="imgcategory"
                            style={{ width: "100px", height: "100px" }}
                            src={require(`../../../LaravelAPI/public/CategoryImg/${h.category_img_name}`)}
                          />
                        </td>
                        <td>{h.category_name.replace(/-/g, " ")}</td>
                        <td>
                          {h.category_status == 1 ? (
                            <label className="switch">
                              <input
                                type="checkbox"
                                defaultChecked
                                name={h.category_name}
                                onClick={onClick}
                              />
                              <span className="slider round"></span>
                            </label>
                          ) : (
                            <label className="switch">
                              <input
                                type="checkbox"
                                name={h.category_name}
                                onClick={onClick}
                              />
                              <span className="slider round"></span>
                            </label>
                          )}
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
                              onClick={onEditClick}
                              style={{ color: "white" }}
                            >
                              Edit
                            </button>
                            <div
                              className="modal fade "
                              id="con-close-modal1"
                              tabIndex="-1"
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
                                            id="category_edit_name"
                                            value={this.state.categoryName}
                                            disabled
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
                                          <label className="control-lable admin-category-label">
                                            Status
                                          </label>
                                          <label className="switch">
                                            <input
                                              type="checkbox"
                                              id="edit-category-check-box"
                                            />
                                            <span className="slider round"></span>
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
                                        onClick={onSaveEditClick}
                                        value="Save Edit"
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

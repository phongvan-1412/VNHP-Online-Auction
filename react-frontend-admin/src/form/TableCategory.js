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
      categoryPaginate: [],
      currentCategory: {},
      checkCategory: false,
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/addcategorytable", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          categoryPaginate: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const self = this;
    axios
      .post(`http://127.0.0.1:8000/api/paginatecategorytable`, {
        paginate: 1,
      })
      .then(function (response) {
        self.setState({
          CategoryData: response.data,
        });
      });
  }

  render() {
    let i = 1;

    const updateCategoryTable = () => {
      const self = this;
      axios
        .post(`http://127.0.0.1:8000/api/paginatecategorytable`, {
          paginate: 1,
        })
        .then(function (response) {
          self.setState({
            CategoryData: response.data,
          });
        });
    };

    const onPaginate = (e) => {
      console.log(e.target.value);
      const self = this;
      axios
        .post(`http://127.0.0.1:8000/api/paginatecategorytable`, {
          paginate: e.target.value,
        })
        .then(function (response) {
          self.setState({
            CategoryData: response.data,
          });
        });
    };

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
      this.state.CategoryData.map((category) => {
        if (category.category_id == e.target.value) {
          this.setState({ currentCategory: category });
          this.setState({ categoryName: e.target.value });
        }
      });
    };

    let checkImg = false;
    let category_img_name = "";
    const onCategoryImgChange = (e) => {
      category_img_name = e.target.files[0].name;

      if (category_img_name) {
        $("#category-edit-img-check").text("");
        checkImg = true;
      } else {
        $("#category-edit-img-check").text("Please choose image.");
        $("#category-edit-img-check").css("color", "red");
        checkImg = false;
      }
    };

    const onCategoryNameBlur = (e) => {
      const category_name = e.target.value.trim().replace(/ /g, "-");
      const result = $("#check-edit-category-result");
      const self = this;
      axios
        .post("http://127.0.0.1:8000/api/checkexistscategory", {
          category_name,
        })
        .then(function (response) {
          if (response.data > 0) {
            result.text("Category name already exists");
            result.css("color", "red");
            self.state.checkCategory = false;
          } else {
            if (category_name != "" && category_name.length <= 200) {
              result.text("");
              self.state.checkCategory = true;
            } else {
              result.text("error: max length 200 character");
              result.css("color", "red");
              self.state.checkCategory = false;
            }
          }
        });
    };

    const onSaveEditClick = () => {
      const category_id = this.state.categoryName;
      const category_name = $("#category_edit_name").val().replace(/ /g, "-");
      const fileImg = $("#edit-img-category").prop("files")[0];

      let img_extension = "";
      if (fileImg == null) {
        img_extension = "";
      } else {
        img_extension = "." + fileImg.name.split(".")[1];
      }
      const category_status = $("#edit-category-check-box").prop("checked");

      let formData = new FormData();
      formData.set("category_img", fileImg);
      formData.set("img_extension", img_extension);
      formData.set("category_id", category_id);
      formData.set("category_name", category_name);
      formData.set("category_status", category_status);

      axios
        .post(`http://127.0.0.1:8000/api/updatecategory`, formData)
        .then(function (response) {
          console.log(response.data)
          if (response.data > 0) {
            $("#edit-category-result").text("Update category succesfull.");
            $("#edit-category-result").css("color", "green");
            updateCategoryTable();
          } else {
            $("#edit-category-result").text("Update category fail.");
            $("#edit-category-result").css("color", "red");
          }
        });
    };
    function Search() {
      var value = $("#search").val().toLowerCase();
      $("#category-records tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    }

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
                    <th>Category Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody id="category-records">
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
                              value={h.category_id}
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
                                      Edit Category
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
                                        <div id="edit-category-result"></div>
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
                                            onBlur={onCategoryNameBlur}
                                            defaultValue={
                                              this.state.currentCategory
                                                .category_name
                                                ? this.state.currentCategory.category_name.replace(
                                                    /-/g,
                                                    " "
                                                  )
                                                : null
                                            }
                                          />
                                          <div id="check-edit-category-result"></div>
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
                                            id="edit-img-category"
                                            onChange={onCategoryImgChange}
                                          />
                                          <div id="category-edit-img-check"></div>
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
                                        name={
                                          this.state.currentCategory.category_id
                                        }
                                        onClick={onSaveEditClick}
                                        value="Save"
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
              {this.state.categoryPaginate.map((paginate, index) => {
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
        <AddCategory updateCategoryTable={updateCategoryTable} />
      </div>
    );
  }
}

export default Category;

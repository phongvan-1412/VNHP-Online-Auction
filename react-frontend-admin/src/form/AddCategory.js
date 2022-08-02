import React from "react";
import $ from "jquery";
import axios from "axios";

function AddCategory() {
  let checkCategory = false;
  let checkCategoryImage = false;

  const onCategoryNameBlur = (e) => {
    const category_name = e.target.value.trim().replace(/ /g, "-");
    const result = $("#check-category-result");
    axios
      .post("http://127.0.0.1:8000/api/checkexistscategory", { category_name })
      .then(function (response) {
        if (response.data > 0) {
          result.text("Category name already exists");
          result.css("color", "red");
          checkCategory = false;
        } else {
          if (category_name != "" && category_name.length >= 3 && category_name.length <= 20) {
            result.text("");
            checkCategory = true;
          } else {
            result.text("Invalid category name");
            result.css("color", "red");
            checkCategory = false;
          }
        }
      });
  };

  let category_img = "";

  const onCategoryImageChange = (e) => {
    const img = e.target.files[0];
    const result = $("#check-img-result");
    if (img != null) {
      result.text("");
      category_img = e.target.files[0];
      checkCategoryImage = true;
    } else {
      result.text("Please choose category image");
      result.css("color", "red");
      category_img = "";
      checkCategoryImage = false;
    }
  };
  const buttononclick = () => {
    const category_name = $("#input-add-category")
      .val()
      .trim()
      .replace(/ /g, "-");

    const categoryNameResult = $("#check-category-result");
    const categoryImageResult = $("#check-img-result");
    const addCategoryResult = $("#add-category-result");

    if (!category_name) {
      categoryNameResult.text("Please enter category name.");
      categoryNameResult.css("color", "red");
      return;
    }

    if (checkCategoryImage) {
      categoryImageResult.text("");
    } else {
      categoryImageResult.text("Please choose category image");
      categoryImageResult.css("color", "red");
      return;
    }

    if (!checkCategory || !checkCategoryImage) {
      return;
    }

    const name = category_img.name;
    const index = name.indexOf(".");

    const img_extension = name.substr(index, index + 4);
    let formData = new FormData();
    formData.set("category_img", category_img);
    formData.set("img_extension", img_extension);
    formData.set("category_name", category_name);

    axios
      .post("http://127.0.0.1:8000/api/addcategory", formData)
      .then(function (response) {
        if (response.data > 0) {
          addCategoryResult.text("Insert new category succesfully.");
          addCategoryResult.css("color", "green");
        } else {
          addCategoryResult.text("Insert new category fail");
          addCategoryResult.css("color", "red");
        }
      });
  };

  return (
    <div
      className="modal fade bd-example-modal-lg"
      id="add-category-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Category</h4>
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
                <div id="add-category-result"></div>
                <div className="form-group">
                  <label
                    className="control-lable admin-category-label"
                    htmlFor="id"
                  >
                    Category Name
                  </label>
                  <input
                    className="form-control"
                    id="input-add-category"
                    onBlur={onCategoryNameBlur}
                  />
                  <div id="check-category-result"></div>
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
                    onChange={onCategoryImageChange}
                  />
                  <div id="check-img-result"></div>
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
              <button
                className="btn btn-info waves-effect waves-light"
                onClick={buttononclick}
                value="Create"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;

import React from "react";

function AddCategory() {

  return (
    <div>
      <div className="row row1 ">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <label className="mb-3 admin-category-label" htmlFor="id">
            Category
          </label>
          <input className="form-control" />

          <label className="mb-3 admin-category-label" htmlFor="id">
            Add Img{" "}
          </label>
          <input className="form-control" type="file" />
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row row2">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <input type="button" value="Delete Category" />
        </div>
        <div className="col-md-3">
          <input type="button" value="Add Category" />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default AddCategory;

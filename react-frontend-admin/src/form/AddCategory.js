import React from "react";
import $ from "jquery";
import axios from "axios";

function AddCategory() {
  const eclick = () => {

    console.log($("#button-delete-category"))
  }
  const element = () => {
    const file = $("#input-img-category").prop("files")[0];
    const name = file.name;
    const tmp = name.indexOf(".");

    const img_extension = name.substr(tmp, tmp + 4);

    let formData = new FormData();
    formData.append("user_img_name", file);
    formData.set("img_extension", img_extension);

    let index = ($("#input-img-category").val()).indexOf(".");
    var category_img_name = ((c) + ($("#input-img-category").val()).substring(index, index + 5));

    axios
      .post(`http://127.0.0.1:8000/api/addcategory`, category)
      .then(function (response) {

      });



  }


  return (
    
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Category</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidder="true">×</button>
            </div>
            <div className="modal-body p-4">
              <div className="row">
                <div className="container">
                  <div className="form-group">
                    <label className="control-lable admin-category-label" htmlFor="id">
                      Category Name
                    </label>
                    <input className="form-control" id="input-add-category" />
                  </div>
                  <div className="form-group">
                    <label className="control-lable admin-category-label" htmlFor="id">
                      Img
                    </label>
                    <input className="form-control" type="file" id="input-img-category" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <input type="submit" className="btn btn-info waves-effect waves-light" onClick={element} value="Create" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

 export default AddCategory;


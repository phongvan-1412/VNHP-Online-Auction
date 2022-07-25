import React from "react";
import $ from "jquery";
import axios from "axios";

function AddCategory() {
  const eclick = () => {

  console.log($("#button-delete-category"))
  }
  const element = () => {

    var current = new Date();
    let text = current.toLocaleDateString()+current.toLocaleTimeString();
    let result = text.replace("/", "");
    let h = result.replace("/", "");
    let n = h.replace(":", "");
    let g = n.replace(":", "");
    let p = g.replace("PM", "");
    let a = p.replace("AM","")
    let c = a.replace(" ","-thumbnail_category")


    let index  = ($("#input-img-category").val()).indexOf(".");
    var category_img_name= ((c)+($("#input-img-category").val()).substring(index, index + 5));

    var category_name = ($("#input-add-category").val())
    

    let category ={category_name,category_img_name}
   
    axios
        .post(`http://127.0.0.1:8000/api/addcategory`, category)
        .then(function (response) {
          
        });

    

  }


  return (


    <div>
      <div className="row container-category">
        <div className="col-md-3"></div>
        <div className="col-md-6 category-card">
          <div className="card">
            <div className="card-body">
              <div className="row category-body">
                <div className="col-md-12">
                  <label className="mb-3 admin-category-label" htmlFor="id">
                    Category
                  </label>
                  <input className="form-control" id="input-add-category" />
                </div>
              </div>
              <div className="row category-body">
                <div className="col-md-12">
                  <label className="mb-3 admin-category-label" htmlFor="id">
                    Add Img{" "}
                  </label>
                  <input className="form-control" type="file" id="input-img-category" />
                </div>
              </div>
              <div className="row gx-5 mb-3 category-body">
                <div className="col-md-2"></div>
                
                <div className="col-md-3">
                  
                  <label>Delete</label>
                  <input className="category-button" type="button" value="Delete Category" onClick={element} />
                </div>
                
                <div className="col-md-2"> </div>
                <div className="col-md-3">
                  <label>Add Category</label>
                  <input className="category-button" type="button"  value="Add Category" onClick={element} />
                </div>
                
                <div className="col-md-2"></div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row row2">
        <div className="col-md-3"></div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default AddCategory;


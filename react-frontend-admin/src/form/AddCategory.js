import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import $ from "jquery";
import axios from "axios";

function AddCategory({updateCategoryTable}) {
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
          if (category_name != "" && category_name.length <= 100) {
            result.text("");
            checkCategory = true;
          } else {
            result.text("error: max length 200 character");
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttononclick = (e) => {
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
          updateCategoryTable();
        } else {
          addCategoryResult.text("Insert new category fail");
          addCategoryResult.css("color", "red");
        }
      });
  };

  return (
    <div>
      {/* <Button onClick={buttononclick} show={show}>
          ADD CATEGORY
      </Button>
      <Modal
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
      </Modal> */}
      <Button variant="primary" onClick={handleShow}>
        ADD CATEGORY
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD CATEGORY</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <label>Category Name</label>     
            <input className="form-control" id="input-add-category" placeholder="max length 200 character" onBlur={onCategoryNameBlur}/> 
            <div id="check-category-result"></div>
          </div>

          <div>
            <label>Img</label>     
          </div>

          <input className="form-control"
                type="file"
                id="input-img-category"
                onChange={onCategoryImageChange}/>
          <div id="check-img-result"></div>
              
        
          <input
            type="submit"
            className="btn btn-info waves-effect waves-light"
            onClick={buttononclick}
            value="Create"
          />
        </Modal.Body>

        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCategory;

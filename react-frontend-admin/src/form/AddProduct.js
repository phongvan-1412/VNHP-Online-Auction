import React from "react";
import $ from "jquery";
import axios from "axios";
function AddProduct({ categories }) {
  let category_name = "";
  let validProductName = false;
  let validProductThumbnailImg = false;
  let validProductImg1 = false;
  let validProductImg2 = false;
  let validProductImg3 = false;
  let validProductInfo = false;

  const categoryOnChange = (e) => {
    categories.forEach((category) => {
      if (category.category_name == e.target.value.trim().replace(/ /g, "-")) {
        category_name = category.category_id;
      }
    });
  };

  const onProductThumbnailImgChange = () => {
    const productThumbnailImg = $("#input-imgs-product").prop("files")[0];
    const result = $("#product-thumbnail-img-check-result");

    console.log($("#input-imgs-product").prop("files"))
    if (productThumbnailImg) {
      result.text("");
      validProductImg2 = true;
    } else {
      result.text("Please choose product thumbnail image");
      result.css("color", "red");
    }
  };
  const onProductImg1Change = () => {
    const img = $("#input-img1-product").prop("files")[0];
    const result = $("#product-img1-check-result");

    if (img) {
      result.text("");
      validProductImg1 = true;
    } else {
      result.text("Please choose product thumbnail image");
      result.css("color", "red");
    }
  };

  const onProductImg2Change = () => {
    const img = $("#input-img2-product").prop("files")[0];
    const result = $("#product-img2-check-result");

    if (img) {
      result.text("");
      validProductThumbnailImg = true;
    } else {
      result.text("Please choose product thumbnail image");
      result.css("color", "red");
    }
  };

  const onProductImg3Change = () => {
    const img = $("#input-img3-product").prop("files")[0];
    const result = $("#product-img3-check-result");

    if (img) {
      result.text("");
      validProductImg3 = true;
    } else {
      result.text("Please choose product thumbnail image");
      result.css("color", "red");
    }
  };

  const onProductNameBlur = (e) => {
    const product_name = e.target.value;
    // const product_name = $('#input-product_name').val();
    const result = $("#check-product-name-result");
    console.log(product_name);

    axios
      .post("http://127.0.0.1:8000/api/checkexistsproduct", { product_name })
      .then(function (response) {
        if (response.data > 0) {
          result.text("Product name " + product_name + " already exists");
          result.css("color", "red");
        } else {
          if (!product_name) {
            result.text("Please enter product name");
            result.css("color", "red");
          } else if (product_name.length >= 15 && product_name.length <= 200) {
            result.text(product_name + " is valid product name.");
            result.css("color", "green");
            validProductName = true;
          } else {
            result.text(product_name + " is valid product name.");
            result.css("color", "red");
          }
        }
      });
  };

  const onProductInfoOnBlur = (e) => {
    const productInfo = e.target.value;
    const result = $("#product-info-check-result");

    if (!productInfo) {
      result.text("Please enter product infomation.");
      result.css("color", "red");
    } else {
      if (productInfo.length >= 100 && productInfo.length <= 4000) {
        result.text("Product infomation is valid.");
        result.css("color", "green");
        validProductInfo = true;
      } else {
        result.text("Product infomation is not valid.");
        result.css("color", "red");
      }
    }
  };

  const productElement = () => {
    const input_imgs_product = $("#input-imgs-product").prop("files")[0];
    const input_img1_product = $("#input-img1-product").prop("files")[0];
    const input_img2_product = $("#input-img2-product").prop("files")[0];
    const input_img3_product = $("#input-img3-product").prop("files")[0];
    const name = input_imgs_product.name;
    const name1 = input_img1_product.name;
    const name2 = input_img2_product.name;
    const name3 = input_img3_product.name;

    const index = name.lastIndexOf(".");
    const img_extension = name.substr(index, index + 4);

    const index1 = name1.lastIndexOf(".");
    const img_extension1 = name1.substr(index1, index1 + 4);

    const index2 = name2.lastIndexOf(".");
    const img_extension2 = name2.substr(index2, index2 + 4);

    const index3 = name3.lastIndexOf(".");
    const img_extension3 = name3.substr(index3, index3 + 4);

    const product_name = $("#input-product_name").val().replace(/ /g, "-");
    const start_price = $("#input-price1-product").val();
    const start_aution_day = $("#input-start-aution-product").val();
    const end_aution_day = $("#input-end-aution-product").val();
    const information = $("#input-information-product").val();
    const ingredients = $("#input-ingredients-product").val();
    const instruction_use = $("#input-instruction_use-product").val();
    const instruction_store = $("#input-instruction_store-product").val();

    let formData = new FormData();
    formData.set("product_thumbnail_img", input_imgs_product);
    formData.set("product_img_name1", input_img1_product);
    formData.set("product_img_name2", input_img2_product);
    formData.set("product_img_name3", input_img3_product);
    formData.set("img_extension", img_extension);
    formData.set("img_extension1", img_extension1);
    formData.set("img_extension2", img_extension2);
    formData.set("img_extension3", img_extension3);
    formData.set("product_name", product_name);
    formData.set("category_id", category_name);
    formData.set("product_start_price", start_price);
    formData.set("product_start_aution_day", start_aution_day);
    formData.set("product_end_autio_day", end_aution_day);
    formData.set("product_information", information);
    formData.set("product_ingredients", ingredients);
    formData.set("product_instruction_use", instruction_use);
    formData.set("product_instruction_store", instruction_store);

    axios
      .post(`http://127.0.0.1:8000/api/addproduct`, formData)
      .then(function (response) {
        if (response.data > 0) {
          console.log("success");
        } else {
          console.log("false");
        }
      });
  };

  return (
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add bill</h4>
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
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="input-product_name"
                    onBlur={onProductNameBlur}
                  />
                  <div id="check-product-name-result"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Category Name
                  </label>
                  <select
                    className="form-control"
                    onChange={categoryOnChange}
                    defaultValue={"Choose Category"}
                  >
                    <option hidden>Please Choose Category... </option>
                    {categories.map((category) => {
                      return (
                        <option>
                          {category.category_name.replace(/-/g, " ")}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Images
                  </label>
                  <input
                    className="form-control "
                    type="file"
                    id="input-imgs-product"
                    onChange={onProductThumbnailImgChange}
                  />
                  <div id="product-thumbnail-img-check-result"></div>
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
                  <label className="control-label" htmlFor="id">
                    Images 1
                  </label>
                  <input
                    className="form-control "
                    type="file"
                    id="input-img1-product"
                    onChange={onProductImg1Change}
                  />
                  <div id="product-img1-check-result"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Start Aution Day</label>
                  <input
                    className="form-control "
                    id="input-start-aution-product"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Images 2
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="input-img2-product"
                    onChange={onProductImg2Change}
                  />
                  <div id="product-img2-check-result"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">End Aution Day</label>
                  <input
                    className="form-control "
                    id="input-end-aution-product"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Images 3
                  </label>
                  <input
                    className="form-control "
                    type="file"
                    id="input-img3-product"
                    onChange={onProductImg3Change}
                  />
                  <div id="product-img3-check-result"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Information
                  </label>
                  <textarea
                    className="form-control"
                    id="input-information-product"
                    onBlur={onProductInfoOnBlur}
                  ></textarea>
                  <div id="product-info-check-result"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Ingredients
                  </label>
                  <textarea
                    className="form-control "
                    id="input-ingredients-product"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Instruction use
                  </label>
                  <textarea
                    className="form-control "
                    id="input-instruction_use-product"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">
                    Instruction store
                  </label>
                  <textarea
                    className="form-control "
                    id="input-instruction_store-product"
                  />
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
                onClick={productElement}
                value="Create"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;

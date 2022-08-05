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
  let validCategoryName = false;
  let validProductPrice = false;
  let validProductStartAutionDay = false;
  let validProductEndAutionDay = false;

  let product_name = "";
  let input_imgs_product = "";
  let input_img1_product = "";
  let input_img2_product = "";
  let input_img3_product = "";
  let information = "";
  let ingredients = "";
  let instruction_store = "";
  let start_price = "";
  let start_aution_day = "";
  let end_aution_day = "";

  const categoryOnChange = (e) => {
    categories.forEach((category) => {
      if (category.category_name == e.target.value.trim().replace(/ /g, "-")) {
        category_name = category.category_id;
        $("#check-category-name-result").text("");
        validCategoryName = true;
        return;
      }
    });
  };

  const onProductNameBlur = (e) => {
    product_name = e.target.value;
    const result = $("#check-product-name-result");

    axios
      .post("http://127.0.0.1:8000/api/checkexistsproduct", { product_name })
      .then(function (response) {
        if (response.data > 0) {
          result.text("Product name already exists");
          result.css("color", "red");
          validProductName = false;
        } else {
          if (!product_name) {
            result.text("Please enter product name");
            result.css("color", "red");
          } else if (product_name.length < 15) {
            result.text("error: min 15 character");
            result.css("color", "red");
            validProductName = false;
          }else if (product_name.length > 200) {
            result.text("error: max 200 character");
            result.css("color", "red");
            validProductName = false;
          } else {
            result.text("");
            validProductName = true;
          }
        }
      });
  };

  const onProductThumbnailImgChange = (e) => {
    input_imgs_product = e.target.files[0];
    const result = $("#product-thumbnail-img-check-result");
    result.text("");
    if (input_imgs_product != null) {
      result.text("");
      validProductThumbnailImg = true;
    } else {
      result.text("Please choose product image");
      result.css("color", "red");
      validProductThumbnailImg = false;
    }
  };

  const onProductImg1Change = (e) => {
    input_img1_product = e.target.files[0];
    const result = $("#product-img1-check-result");

    if (input_img1_product != null) {
      result.text("");
      validProductImg1 = true;
    } else {
      result.text("Please choose product image");
      result.css("color", "red");
      validProductImg1 = false;
    }
  };

  const onProductImg2Change = (e) => {
    input_img2_product = e.target.files[0];
    const result = $("#product-img2-check-result");

    if (input_img2_product != null) {
      result.text("");
      validProductImg2 = true;
    } else {
      result.text("Please choose product image");
      result.css("color", "red");
      validProductImg2 = false;
    }
  };

  const onProductImg3Change = (e) => {
    input_img3_product = e.target.files[0];
    const result = $("#product-img3-check-result");

    if (input_img3_product != null) {
      result.text("");
      validProductImg3 = true;
    } else {
      result.text("Please choose product image");
      result.css("color", "red");
      validProductImg3 = false;
    }
  };

  const onProductInfoOnBlur = (e) => {
    information = e.target.value;
    const result = $("#product-info-check-result");

    if (!information) {
      result.text("Please enter product infomation.");
      result.css("color", "red");
      validProductInfo = false;
    } else {
      if (information.length >= 100 && information.length <= 4000) {
        result.text("");
        result.css("color", "green");
        validProductInfo = true;
      } else {
        result.text("error: max length 4000");
        result.css("color", "red");
        validProductInfo = false;
      }
    }
  };

  const onProductPriceOnBlur = (e) => {
    start_price = e.target.value;
    const result = $("#product-price-check-result");

    if (!start_price) {
      result.text("Please enter product price.");
      result.css("color", "red");
      validProductPrice = false;
    } else {
      if (start_price <= 0) {
        result.text(
          "error: min $1."
        );
        result.css("color", "red");
        validProductPrice = false;
        e.target.value = 0;
      } else if (start_price > 100000) {
        result.text(
          "error: max $100k."
        );
        result.css("color", "red");
        validProductPrice = false;
        e.target.value = 0;
      } else {
        result.text("");
        result.css("color", "green");
        validProductPrice = true;
      }
    }
  };
  const convertDatetime = (date) => {
    var dd = date.getDate();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  };

  const onIngredientOnBlur = (e) => {
    ingredients = e.target.value;
  };
  const onInstructionStoreOnBlur = (e) => {
    instruction_store = e.target.value;
  };

  const onProductStartAutionDayOnBlur = (e) => {
    start_aution_day = e.target.value;
    const result = $("#product-start-aution-day-check-result");

    const currentDate = convertDatetime(
      new Date(new Date().toLocaleString().substring(0, 9))
    );
    const currentDay = convertDatetime(new Date(new Date(start_aution_day)));

    const currentProductStartDay = new Date(currentDate).getTime();
    const currentDayTimestamp = new Date(currentDay).getTime();

    if (!start_aution_day) {
      result.text("Please enter start aution day.");
      result.css("color", "red");
      validProductStartAutionDay = false;
    } else {
      if (currentProductStartDay > currentDayTimestamp) {
        result.text("Start aution day is not valid.");
        result.css("color", "red");
        validProductStartAutionDay = false;
      } else {
        result.text("");
        result.css("color", "green");
        validProductStartAutionDay = true;
      }
    }
  };

  const onProductEndAutionDayOnBlur = (e) => {
    end_aution_day = e.target.value;
    const result = $("#product-end-aution-day-check-result");

    const currentDate = convertDatetime(
      new Date(new Date().toLocaleString().substring(0, 9))
    );
    const productEndAutionday = convertDatetime(
      new Date(new Date(end_aution_day))
    );

    const currentDateTimestamp = new Date(currentDate).getTime();
    const productEndAutiondayTimestamp = new Date(
      productEndAutionday
    ).getTime();

    if (!end_aution_day) {
      result.text("Please enter end aution day.");
      result.css("color", "red");
      validProductEndAutionDay = false;
    } else {
      if (currentDateTimestamp > productEndAutiondayTimestamp) {
        result.text("End aution day is not valid.");
        result.css("color", "red");
        validProductEndAutionDay = false;
      } else {
        result.text("");
        result.css("color", "green");
        validProductEndAutionDay = true;
      }
    }
  };

  const productElement = () => {
   
    const input_imgs_product = $("#input-imgs-product").prop('files')[0];
    const input_img1_product = $("#input-img1-product").prop('files')[0];
    const input_img2_product = $("#input-img2-product").prop('files')[0];
    const input_img3_product = $("#input-img3-product").prop('files')[0];

    const checkProductName = $("#check-product-name-result");
    const checkProductThmbnailImg = $("#product-thumbnail-img-check-result");
    const checkProductImg1 = $("#product-img1-check-result");
    const checkProductImg2 = $("#product-img2-check-result");
    const checkProductImg3 = $("#product-img3-check-result");
    const checkProductInfo = $("#product-info-check-result");
    const checkCategoryname = $("#check-category-name-result");
    const checkProductPrice = $("#product-price-check-result");
    const checkStartDay = $("#product-start-aution-day-check-result");
    const checkEndDay = $("#product-end-aution-day-check-result");

    if (
      !product_name &&
      !input_imgs_product &&
      !input_img1_product &&
      !input_img2_product &&
      !input_img3_product &&
      !information &&
      !category_name &&
      !start_price &&
      !start_aution_day &&
      !end_aution_day
    ) {
      checkProductName.text("Please enter product name.");
      checkProductName.css("color", "red");

      checkProductThmbnailImg.text("Please insert product thumbnail image.");
      checkProductThmbnailImg.css("color", "red");

      checkProductImg1.text("Please insert product image1.");
      checkProductImg1.css("color", "red");

      checkProductImg2.text("Please insert product image2.");
      checkProductImg2.css("color", "red");

      checkProductImg3.text("Please insert product image3.");
      checkProductImg3.css("color", "red");

      checkProductInfo.text("Please enter product infomation.");
      checkProductInfo.css("color", "red");

      checkCategoryname.text("Please enter category name.");
      checkCategoryname.css("color", "red");

      checkProductPrice.text("Please enter product price.");
      checkProductPrice.css("color", "red");

      checkStartDay.text("Please enter start day.");
      checkStartDay.css("color", "red");

      checkEndDay.text("Please end start day.");
      checkEndDay.css("color", "red");

      return;
    }

    if (!product_name) {
      checkProductName.text("Please enter product name.");
      checkProductName.css("color", "red");
      return;
    }

    if (!input_imgs_product) {
      checkProductThmbnailImg.text("Please insert product thumbnail image.");
      checkProductThmbnailImg.css("color", "red");
      return;
    }

    if (!input_img1_product) {
      checkProductImg1.text("Please insert product image1.");
      checkProductImg1.css("color", "red");
      return;
    }

    if (!input_img2_product) {
      checkProductImg2.text("Please insert product image2.");
      checkProductImg2.css("color", "red");
      return;
    }

    if (!input_img3_product) {
      checkProductImg3.text("Please insert product image3.");
      checkProductImg3.css("color", "red");
      return;
    }

    if (!information) {
      checkProductInfo.text("Please enter product infomation.");
      checkProductInfo.css("color", "red");
      return;
    }

    if (!category_name) {
      checkCategoryname.text("Please enter category name.");
      checkCategoryname.css("color", "red");
      return;
    }

    if (!start_aution_day) {
      checkStartDay.text("Please enter start day.");
      checkStartDay.css("color", "red");
      return;
    }

    if (!product_name) {
      checkEndDay.text("Please end start day.");
      checkEndDay.css("color", "red");
      return;
    }

    if (
      !validProductName ||
      !validProductThumbnailImg ||
      !validProductImg1 ||
      !validProductImg2 ||
      !validProductImg3 ||
      !validProductInfo ||
      !validCategoryName ||
      !validCategoryName ||
      !validProductPrice ||
      !validProductStartAutionDay ||
      !validProductEndAutionDay
    ) {
      return;
    }

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
    formData.set("product_instruction_store", instruction_store);
    
    axios
      .post(`http://127.0.0.1:8000/api/addproduct`, formData)
      .then(function (response) {
        console.log(response.data)
        if (response.data > 0) {
          $("#add-product-result").text("Add new product successfully.");
          $("#add-product-result").css("color", "green");
        } else {
          $("#add-product-result").text("Add new product fail.");
          $("#add-product-result").css("color", "red");
        }
      });
  };

  return (
    <div
      className="modal fade bd-example-modal-lg"
      tabIndex="-1"
      id="add-product-modal"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Product</h4>
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
                    placeholder="max 200 character"
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
                        <option key={category.category_id}>
                          {category.category_name.replace(/-/g, " ")}
                        </option>
                      );
                    })}
                  </select>
                  <div id="check-category-name-result"></div>
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
                <input
                  className="form-control "
                  id="input-price-product"
                  placeholder="max 100k"
                  onBlur={onProductPriceOnBlur}
                  type="number"
                />
                <div id="product-price-check-result"></div>
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
                    type="datetime-local"
                    onBlur={onProductStartAutionDayOnBlur}
                  />
                  <div id="product-start-aution-day-check-result"></div>
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
                    className="form-control "
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
                    className="form-control"
                    id="input-end-aution-product"
                    onBlur={onProductEndAutionDayOnBlur}
                    type="datetime-local"
                  />
                  <div id="product-end-aution-day-check-result"></div>
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
                    placeholder="max 4000 character"
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
                    placeholder="max 4000 character"
                    onBlur={onIngredientOnBlur}
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
                    id="input-instruction-store-product"
                    placeholder="max 4000 character"
                    onBlur={onInstructionStoreOnBlur}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div id="add-product-result"></div>
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

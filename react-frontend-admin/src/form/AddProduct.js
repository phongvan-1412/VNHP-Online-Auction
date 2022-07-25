import React from "react";
import $ from "jquery";
import axios from "axios";
function AddProduct() {
  const productElement = () => {
       var current = new Date();
    
      let text = current.toLocaleDateString()+current.toLocaleTimeString();
      
      let result = text.replace("/", "");
      let h = result.replace("/", "");
      let n = h.replace(":", "");
      let g = n.replace(":", "");
      let p = g.replace("PM", "");
      let a = p.replace("AM","")
      let hanh = a.replace(" ","_thumbnail")
      let q = a.replace(" ","-img_name1")
      let r = a.replace(" ","-img_name2")
      let i = a.replace(" ","-img_name3")
console.log(result)
    let index  = ($("#input-imgs-product").val()).indexOf(".");
    var product_name = ($("#input-product_name").val())
    var category_id = ($("#input-category-id").val())

    var product_thumbnail_img_name = ((hanh)+($("#input-imgs-product").val()).substring(index, index + 5));
    var product_img_name1 = ((q)+($("#input-img1-product").val()).substring(index, index + 5));
    var product_img_name2 = ((r)+($("#input-img2-product").val()).substring(index, index + 5));
    var product_img_name3 = ((i)+($("#input-img3-product").val()).substring(index, index + 5));
    var information_product = ($("#input-information-product").val())
    var ingredients_product= ($("#input-ingredients-product").val())
    var instruction_product =($("#input-instructionuse-product").val())
    var instruction_product =($("#input-instructionstore-product").val())
    var prices_product = ($("#input-prices-product").val())
    var price1_product = ($("#input-price1-product").val())
    var price2_product = ($("#input-price2-product").val())
    var quantity_product = ($("#input-quantity-product").val())
    var status_product = ($("#input-status-product").val())
    var input_start_aution_product = ($("#input-start-aution-product").val())
    var input_end_aution_product = ($("#input-end-aution-product").val())
   let product ={product_name,category_id,product_thumbnail_img_name,product_img_name2 ,
    product_img_name3, product_img_name1,information_product, ingredients_product,
    instruction_product,prices_product, price1_product,price2_product,quantity_product,status_product,
    input_start_aution_product,input_end_aution_product
  }
   
    axios
    .post(`http://127.0.0.1:8000/api/addproduct`, product)
    .then(function (response) {
      
    });

  }
  return (
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add bill</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
          </div>
          <div className="modal-body p-4">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Product Name</label>
                  <input type="text" className="form-control" id="input-product_name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Category Name</label>
                  <select  className="form-control " >
                    <option id="input-category-id">Category</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Images</label>
                  <input className="form-control " type="file" id="input-imgs-product" required />
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
                  <label className="control-label" htmlFor="id">Images 1</label>
                  <input className="form-control " type="file" id="input-img1-product" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Aution Price</label>
                  <input className="form-control " id="input-price2-product" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Images 2</label>
                  <input className="form-control " type="file" id="input-img2-product" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Start Aution Day</label>
                  <input className="form-control " id="input-start-aution-product"  type="date" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Images 3</label>
                  <input className="form-control " type="file" id="input-img3-product" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">End Aution Day</label>
                  <input className="form-control " id="input-end-aution-product" type="date"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Price</label>
                  <input type="text" className="form-control" id="input-prices-product" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Status</label>
                  <label className="switch">
                    <input name="category_status" type="checkbox" id="input-status-product"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Information</label>
                  <textarea className="form-control " id="input-information-product" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Ingredients</label>
                  <textarea className="form-control " id="input-ingredients-product" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Instruction use</label>
                  <textarea className="form-control " id="input-instructionuse-product" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label" htmlFor="id">Instruction store</label>
                  <textarea className="form-control " id="input-instructionusestore-product" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                <input type="submit" className="btn btn-info waves-effect waves-light" onClick={productElement} value="Create"/>
            </div>
          </div> 
        </div>
      </div>
    </div>


  );
}
export default AddProduct;
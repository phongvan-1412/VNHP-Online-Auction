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

    let index  = ($("#input-imgs-product").val()).indexOf(".");
    var product_name = ($("#input-product_name").val())
    var category_id = ($("#input-category-name").val())

    var product_thumbnail_img_name = ((hanh)+($("#input-imgs-product").val()).substring(index, index + 5));
    var product_img_name1 = ((q)+($("#input-img1-product").val()).substring(index, index + 5));
    var product_img_name2 = ((r)+($("#input-img2-product").val()).substring(index, index + 5));
    var product_img_name3 = ((i)+($("#input-img3-product").val()).substring(index, index + 5));
    var information_product = ($("#input-information-product").val())
    var ingredients_product= ($("#input-ingredients-product").val())
    var instruction_product =($("#input-instruction-product").val())
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
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 product-form">
          <div className="card product-card-form">
            <div className="card-body">
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="mb-2 " htmlFor="id">
                    Product Name
                  </label>
                  <input className="form-control " id="input-product_name" />
                </div>
                <div className="col-md-6">
                  <label className="mb-2" htmlFor="id">
                    Information
                  </label>
                  <input className="form-control " id="input-information-product" />
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                <label className="mb-2 label1" htmlFor="id">
                    Category Name
                  </label>
                  <select>
                    <option className="form-control " id="input-category-id">Category</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="mb-2 " htmlFor="id">
                    Ingredients
                  </label>
                  <input className="form-control " id="input-ingredients-product" />
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="mb-2" htmlFor="id">
                    Img
                  </label>
                  <input className="form-control " type="file" id="input-imgs-product" required />
                </div>
                <div className="col-md-6">
                  <label className="mb-2 " htmlFor="id">
                    Instruction
                  </label>
                  <input className="form-control " id="input-instruction-product" />
                </div>
              </div>
              {/* img-group */}
              <div className="row gx-3 mb-3">
                <div className="col-md-2"><label className="md-2 "></label>
                  <input className="form-control " type="file" id="input-img1-product" /></div>
                <div className="col-md-2"><label className="md-2 "></label>
                  <input className="form-control" type="file" id="input-img2-product" /></div>
                <div className="col-md-2"><label className="md-2 "></label>
                  <input className="form-control" type="file" id="input-img3-product" /></div>
                <div className="col-md-6">
                  <label className="mb-2 " htmlFor="id">
                    Price
                  </label>
                  <input className="form-control " id="input-prices-product" />
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6"></div>
                <div className="col-md-3"> <label className="md-2">Start Price</label>
                  <input className="form-control " id="input-price1-product" /></div>
                <div className="col-md-3"><label className="md-2 ">Aution Price</label>
                  <input className="form-control " id="input-price2-product" /></div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6"></div>
                <div className="col-md-3"> <label className="md-2">Start Aution Day</label>
                  <input className="form-control " id="input-start-aution-product"  type="date" /></div>
                <div className="col-md-3"><label className="md-2 ">End Aution Day</label>
                  <input className="form-control " id="input-end-aution-product" type="date"/></div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6"></div>
                <div className="col-md-6"> <label className="mb-2" htmlFor="id">
                  Quantity
                </label>
                  <input className="form-control " id="input-quantity-product" /></div>
              </div>
              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                <input className="mb-2 btn-lg button-product" style={{width:"100%"}} type="button" value="Submit" onClick={productElement} /></div>
                <div className="col-md-6"> <label className="mb-2 " htmlFor="id">
                  Status
                </label>
                  <input className="form-control " type="checkbox" id="input-status-product" style={{width:"1px"}}/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
export default AddProduct;
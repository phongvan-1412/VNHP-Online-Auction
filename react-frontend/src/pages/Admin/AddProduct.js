import React from "react";

function AddProduct() {
  return (
    <div>
      <div className="row ">
        <div className="col-md-2"></div>
        {/*  */}
        <div className="col-md-4 product2">
          <label className="mb-2 label1" htmlFor="id">
            Product Name
          </label>
          <input className="form-control input1" />

          <label className="mb-2 label1" htmlFor="id">
            Category Name
          </label>
          <input className="form-control input1" />

          {/* <img className='mb-2'/> */}
          <label className="mb-2 label1" htmlFor="id">
            Img
          </label>
          <input className="form-control input1" type="file" />
          {/* img phu */}
          <div className="row gx-3 mb-3">
            <div className="col-md-3">
              <label className="md-2 label1"></label>
              <input className="form-control input1" type="file" />
            </div>
            <div className="col-md-3">
              <label className="md-2 label1"></label>
              <input className="form-control input1" type="file" />
            </div>
            <div className="col-md-3">
              <label className="md-2 label1"></label>
              <input className="form-control input1" type="file" />
            </div>
            <div className="col-md-3"></div>
          </div>

          <input className="mb-2 btn-lg " type="button" value="Submit"/>
        </div>
        <div className="col-md-4 product3">
          <label className="mb-2 label1" htmlFor="id">
            Information
          </label>
          <input className="form-control input1" />

          <label className="mb-2 label1" htmlFor="id">
            Ingredients
          </label>
          <input className="form-control input1" />

          <label className="mb-2 label1" htmlFor="id">
            Instruction
          </label>
          <input className="form-control input1" />

          <label className="mb-2 label1" htmlFor="id">
            Price
          </label>
          <input className="form-control input1" />
          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="md-2 label1">Start_Price</label>
              <input className="form-control input1" />
            </div>
            <div className="col-md-6">
              <label className="md-2 label1">Aution_Price</label>
              <input className="form-control input1" />
            </div>
          </div>

          <label className="mb-2 label1" htmlFor="id">
            Quantity
          </label>
          <input className="form-control input1" />

          <label className="mb-2 label1" htmlFor="id">
            Status
          </label>
          <input className="form-control input1" />
        </div>
        {/*  */}
        <div className="col-2"></div>
      </div>
    </div>
  );
}
export default AddProduct;

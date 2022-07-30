import React from "react";
import $ from "jquery";
import axios from "axios";
import AddProduct from "./AddProduct";

function TableProduct() {
    const addproducttable = ()=>{
        axios
        .get(`http://127.0.0.1:8000/api/addproducttable`,)
        .then(function (response) {
          
        });
    }
    return(
        <div className="container-fluid">
        <button
            className="btn btn-success mb-3 "
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
        >
            Add new
        </button>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Product</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped" id="dataTable" style={{ width: "100%" }} cellPadding="0">
                    <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Img</th>
                    <th>Information</th>
                    <th>Ingredients</th>
                    <th>Price</th>
                    <th>Start Aution Day</th>
                    <th>End Aution Day</th>
                    <th>Status</th>
                </tr>
            </thead>

                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <AddProduct />
    </div>
)
    
    
} 

export default TableProduct;
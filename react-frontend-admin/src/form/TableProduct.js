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
    <div className="container">
        <div className="float-right mb-3">
            <button
            className="btn btn-success"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            >
            Add new
            </button>
        </div>
        <table className="table table-striped">
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

            </tbody>
        </table>
        <AddProduct />
    </div>
    );

    
    
}
export default TableProduct;
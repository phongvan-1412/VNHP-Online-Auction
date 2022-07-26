import React from "react";
import $ from "jquery";
import axios from "axios";
import AddCategory from "./AddCategory";

function TableCategory() {
    const addcategorytable = ()=>{
        axios
        .get(`http://127.0.0.1:8000/api/addcategorytable`,)
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
                    <th>Category Name</th>
                    <th>Img</th>
                    <th>Add Category</th>
                    <th>Delete Category</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        <AddCategory />
    </div>
    );

    
    
}
export default TableCategory;
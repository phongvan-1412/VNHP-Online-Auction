import React from "react";
import $ from "jquery";
import axios from "axios";
import AddCategory from "./AddCategory";

function TableCategory() {
    const addcategorytable = () => {
        axios
            .get(`http://127.0.0.1:8000/api/addcategorytable`,)
            .then(function (response) {

            });
    }
    return (
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
                    <h6 className="m-0 font-weight-bold text-primary">Category</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped" id="dataTable" style={{ width: "100%" }} cellPadding="0">
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
                                <tr>
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
            <AddCategory />
        </div>
    )

}

export default TableCategory;
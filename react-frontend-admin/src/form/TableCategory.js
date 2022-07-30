import React, { Component } from "react";
import $ from "jquery";
import AddCategory from "./AddCategory";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryData: [],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/addcategorytable", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          CategoryData: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let i = 1;

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
              <table
                className="table table-striped"
                id="dataTable"
                style={{ width: "100%" }}
                cellPadding="0"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Img</th>
                    <th>Category Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.CategoryData.map((h, index) => {
                    return (
                      <tr>
                        <td key={index}>{i++} </td>
                        <td>{h.category_img_name}</td>
                        <td>{h.category_name}</td>
                        <td>
                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class={"custom-control-input"}
                              id="customSwitch1" 
                              value={h.category_status == 1 ?? "on"}
                              
                            />
                            <label
                              class="custom-control-label"
                              for="customSwitch1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-secondary mr-1"
                            >
                              Edit
                            </button>
                            
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <AddCategory />
      </div>
    );
  }
}

export default Category;

import React, { Component } from "react";
import $ from "jquery";

class Customer extends Component{
  
  constructor(props) { 
    super(props); 
    this.state = { 
        CustomerData: [], 
    }} 
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/customerdata", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
          this.setState({
            CustomerData: response
          }); 
        })
        .catch(err => {
          console.log(err);
        })
      };

      render(){
        let i = 1
        function Search() {
          var value = $("#searchcustomer").val().toLowerCase();
          $("#customerrecords tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        };
        return(                 
            <div className="container-fluid">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Customer</h6>
                </div>
                <div className="card-body">
                <input className="form-control col-3 mb-3"
                      id="searchcustomer"
                      type="text" 
                      onKeyUp={Search} 
                      placeholder="Search.."
                 />
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" style={{width: "100%"}} cellSpacing="0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Customer</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Date of birth</th>
                          <th>Address</th>
                          <th>Total spending</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>#</th>
                          <th>Customer</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Date of birth</th>
                          <th>Address</th>
                          <th>Total spending</th>
                        </tr>
                      </tfoot>
                      <tbody id="customerrecords">
                        {this.state.CustomerData.map((p,index) => {
                          return(
                            <tr>
                                <td className="align-middle" key={index}>
                                    {i++}
                                </td>
                                <td>
                                    <img 
                                        width={"60px"} 
                                        className="mr-3" 
                                        src={"http://localhost:8000/UserImage/"+p.customer_img_name}
                                    >
                                    </img>
                                    {p.customer_name}
                                </td>
                                <td className="align-middle">{p.customer_email}</td>
                                <td className="align-middle">{p.customer_contact}</td>
                                <td className="align-middle">{p.customer_dob}</td>
                                <td className="align-middle">{p.customer_address}</td>
                                <td className="align-middle">{p.total_spending}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>    
            </div>
        )  
      }
}
 

export default Customer;

import React, { Component } from 'react'

class LoyalCustomer extends Component{
    constructor(props) { 
        super(props); 
        this.state = { 
          CustomerData: [], 
        }} 
      componentDidMount() {
        fetch("http://127.0.0.1:8000/api/toployalcustomer", {
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

        let i = 1;
        function Rank(i){
            let rank = "";
            if (i == 1) {rank = "st"}
            else if(i == 2) {rank = "nd"}
            else if(i == 3) {rank = "rd"}
            else {rank = "th"};
            return rank;
        }


        return (
            <div className="col-xl-8 col-lg-8">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">TOP 5 LOYAL CUSTOMER</h6>
                    </div>
                    <div className="card-body flex">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead style={{width: "100%"}}>
                                    <tr >
                                        <th>Rank</th>
                                        <th>Customer</th>
                                        <th>Contact</th>
                                        <th>Total Spending</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.CustomerData.map((p, index)=>{
                                        return(
                                            <tr >
                                                <td key={index}>{i}{Rank(i++)}</td>
                                                <td>
                                                    <img className='mr-1' style={{height: "50px"}}
                                                    src={require(`../../../../../LaravelAPI/public/UserImage/${p.customer_img_name}`)}
                                                    /> 
                                                    <span>{p.customer_name}</span> 
                                                </td>
                                                <td>{p.customer_contact}</td>
                                                <td>{p.total_spending}</td>
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
export default LoyalCustomer

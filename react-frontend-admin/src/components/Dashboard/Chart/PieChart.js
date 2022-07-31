import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            CategoryData: []
        }
    }
    componentDidMount(){
        fetch("http://127.0.0.1:8000/api/bestcategoryseller", {
            method: "GET"
        })
        .then((response) => response.json())
        .then((response) => {
            let Arr = []
            response.forEach(res => {
                Arr = [...Arr, res.amount]
            })
            this.setState({
                CategoryData: Arr
            })
        })
        .catch(err => {
            console.log(err);
        })
    };
    render(){
        const labels = ["Asian Art & Antiques","Collectibles","Decorative Art","Fine Art","Furniture","Jewelry"];
        const data = {
            labels: labels,
            datasets: [{
                backgroundColor: [
                  'rgba(255, 99, 132)',
                  'rgba(255, 159, 64)',
                  'rgba(255, 205, 86)',
                  'rgba(75, 192, 192)',
                  'rgba(54, 162, 235)',
                  'rgba(153, 102, 255)',
                ],
                data: this.state.CategoryData   ,
                hoverOffset: 4
                }
            ]
          }

        return(
            <div className="col-xl-4 col-lg-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">CATEGORY BEST SELLING</h6>
                    </div>
                    <div className="card-body">
                        <Pie data={data}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PieChart
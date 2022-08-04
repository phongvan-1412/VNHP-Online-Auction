import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

class BarChart extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      RevenuesData: [], 
    }} 
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/revenueeachmonth", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
          let Arr = []
          response.forEach(res => {
            Arr = [...Arr, res.revenues]
          })
          this.setState({
            RevenuesData: Arr
          }); 
        })
        .catch(err => {
          console.log(err);
        })
      };
  render(){
    const labels = ["January", "February", "March", "April", "May", "June","July","August"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Revenue",
          borderColor: "rgb(255, 99, 132, 0.5)",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor:[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          data: this.state.RevenuesData
        }
      ],
    };

    return (
      <div className="col-xl-6 col-lg-6">
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">REVENUE 2022</h6>
            </div>
            <div className="card-body">
              <Bar data={data} />
            </div>
        </div>
      </div>
    );
  }
};

export default BarChart;

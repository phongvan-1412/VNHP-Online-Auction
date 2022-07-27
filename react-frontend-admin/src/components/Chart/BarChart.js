import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

class BarChart extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      ProductData: [], 
    }} 
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/revenueeachmonth", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
          this.setState({
            ProductData: response
          }); 
        })
        .catch(err => {
          console.log(err);
        })
      };
  render(){
    const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Revenue",
          borderColor: "rgb(255, 99, 132, 0.5)",
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          data: [
            this.state.ProductData.map((p) => {
              return(
                p.revenues
              )
            })
          ],
        }
      ],
    };

    return (
      <Bar data={data} />
    );
  }
};

export default BarChart;

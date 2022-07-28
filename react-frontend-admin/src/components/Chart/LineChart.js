import React, { Component } from 'react'

import { Line } from 'react-chartjs-2';


class LineChart extends Component{
  constructor(props) { 
    super(props); 
    this.state = { 
      RevenuesData: [], 
    }} 
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/revenueeachyear", {
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
    const labels = ["2018","2019","2020","2021","2022"];
    const data = {
      labels: labels,
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          data: this.state.RevenuesData
        }
      ],
    };
    return (
      <Line data={data}/>
    )
  }
};

export default LineChart;
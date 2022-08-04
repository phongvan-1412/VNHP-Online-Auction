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
          label: 'Revenues',
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          data: this.state.RevenuesData
        }
      ],
    };
    return (
      <div className="col-xl-6 col-lg-6">
          <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">REVENUE 2018 - 2022</h6>
              </div>
              <div className="card-body">
                <Line data={data}/>
              </div>
          </div>
      </div>
    )
  }
};

export default LineChart;
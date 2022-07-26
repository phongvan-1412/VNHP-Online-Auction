import React from 'react'
import { Line } from 'react-chartjs-2';
export const LineChart = () => {
    const labels = ["August","September","October","November","December","January", "February", "March", "April", "May", "June","July"];
    const data = {
        labels: labels,
        datasets: [
          {
            fill: true,
            label: 'Dataset 2',
            data:  [35, 10, 5, 2, 20, 30, 45, 65, 75, 10, 15, 95],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  return (
    <Line data={data}/>
  )
}

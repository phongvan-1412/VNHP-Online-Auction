import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["August","September","October","November","December","January", "February", "March", "April", "May", "June","July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue",
        borderColor: "rgb(255, 99, 132, 0.5)",
        data: [35, 10, 5, 2, 20, 30, 45, 65, 75, 10, 15, 95],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      }
    ],
  };
  return (
      <Bar data={data} />
  );
};

export default BarChart;

import React, { Component } from 'react'
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react"
import { BarChart } from '../BarChart/BarChart';


function DashBoard() {
    useEffect(() => {
        const fetchPrices = async () => {
          const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
          const data = await res.json()
          setChartData({
            labels: data.data.map((crypto) => crypto.name),
            datasets: [
              {
                label: "Price in USD",
                data: data.data.map((crypto) => crypto.priceUsd),
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ]
              }
            ]
          });
        };
        fetchPrices()
      }, []);
    const [chartData, setChartData] = useState({})
  
    return (
       <div className="container">
            <BarChart chartData={chartData} />
       </div>
    )
  }



export default DashBoard

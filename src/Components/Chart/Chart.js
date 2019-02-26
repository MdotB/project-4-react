import React, { Component } from 'react'
import './Chart.css'
import { Doughnut, Bar } from 'react-chartjs-2';

const Chart = ({ transactions }) => {
  let chartData = {
      labels: ["Automobile", "Child Care", "Food", "Taxes"],
      datasets: [
        {
          label: 'Spending',
          data: [3500, 4500, 5000, 8000],
          backgroundColor: [
            'rgba(255, 99, 132, .6)',
            'rgba(54, 162, 235, .6)',
            'rgba(255, 206, 86, .6)',
            'rgba(75, 192, 86, .6)'
          ]
        }
      ]
    }

    return (
      <div className="Chart-container">
      <Doughnut
        data={chartData}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
      </div>
    )
}

export default Chart
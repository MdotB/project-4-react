import React, { Component } from 'react'
import './Chart.css'
import { Doughnut, Bar } from 'react-chartjs-2';

const Chart = ({ transactions }) => {
  
  // Extract list of unique label names from entered transaction categories
  let labels = []
  transactions.length ? (transactions.map(t => {
    if (labels.includes(t["category"]) === false && t["category"] !== "Income") {
      labels.push(t["category"])
    }
    return labels
  })) : 
  (console.log("POOP"))
  
  // Aggregate amount for each category
  let categoryTotals = []
  let categories = labels.sort()
  for (let i = 0; i < categories.length; i++) {
    let filterByCategory = transactions.filter(t => {
      return t.category === categories[i]
    })
    console.log(filterByCategory)
    let eachCategoryTotal = filterByCategory.reduce((a, b) => {
      console.log(a)
      return a + b.amount
    }, 0)
    console.log(eachCategoryTotal)
    categoryTotals.push(eachCategoryTotal)
  }
  console.log(categoryTotals)

  let chartData = {
      labels: labels.sort(),
      datasets: [
        {
          label: 'Spending',
          data: categoryTotals,
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
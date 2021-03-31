import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ timeArray, priceArray }) => {
  const [chartData, setChartData] = useState({});

  const lineChart = () => {
    setChartData({
      labels: timeArray,
      datasets: [
        {
          label: 'Value',
          data: priceArray,
          backgroundColor: [
            'rgba(0, 128, 128, 0.6)'
          ],
          borderWidth: 4,
          lineTension: 0
        }
      ]
    })
  }

  useEffect(() => {
    lineChart()
  }, [timeArray, priceArray])

  return (
    <div className="chart" >
      <Line data={chartData} options={{
        responsive: true,
        title: { text: 'Bitcoin Price', display: true },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            }
          }]
        },
      }} />
    </div>
  )
}

export default Chart;

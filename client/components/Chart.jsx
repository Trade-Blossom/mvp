import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const lineChart = () => {
    setChartData({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'Value',
          data: [15, 7, 21, 23, 19, 25],
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
  }, [])

  return (
    <div className="chart" >
      <Line data={chartData} options={{
        responsive: true,
        title: { text: 'Portfolio', display: true},
        maintainAspectRatio: false,
      }}/>
    </div>
  )
}

export default Chart;

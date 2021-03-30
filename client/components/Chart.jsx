import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const lineChart = () => {
    setChartData({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday'],
      datasets: [
        {
          label: 'Value',
          data: [15, 7, 21, 23, 19],
          backgroundColor: [
            'rgba(0, 128, 128, 1)'
          ],
          borderWidth: 4
        }
      ]
    })
  }

  useEffect(() => {
    lineChart()
  }, [])

  return (
    <div classname="chart" style={{width: "800px", height: "500px"}}>
      <Line data={chartData} options={{
        responsive: true,
        title: { text: 'Portfolio', display: true}
      }}/>
    </div>
  )
}

export default Chart;

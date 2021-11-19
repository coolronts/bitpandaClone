import React, {useEffect} from 'react'

import { Line } from 'react-chartjs-2';

export default function Chart({ dataX }) {
 useEffect(() => {
   console.log(dataX)
 }, [dataX])
 const data = {
  labels: dataX,
  datasets: [
    {
      data: dataX,
      fill: false,
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1 
    },
  ],
};

  const options = {
    aspectRatio: 4,
    responsive: true,
    elements: {
      point:{radius: 0}
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip:{enabled: false},
    },
    scales: {
      legend: { display: false },
      x: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
     },
      y: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
      }
    }
  };
 return (
     <Line data={data} options={options} />
 )
}
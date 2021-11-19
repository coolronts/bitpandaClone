import 'chartjs-adapter-date-fns';

import React, {useEffect, useState} from 'react'

import { Line } from 'react-chartjs-2';

export default function Chart({ dataX,yGrid=false, xGrid=false, tooltip=false }) {
  useEffect(() => {
  },
  [dataX])
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
      tooltip:{enabled: tooltip},
    },
    scales: {
      legend: { display: false },
      x: {
        grid: {
          display: xGrid,
          drawBorder: xGrid 
        },
        ticks: {display: false}
     },
      y: {
        grid: {
          display: yGrid,
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
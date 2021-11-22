import 'chartjs-adapter-date-fns';

import React, {useEffect} from 'react'

import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types'

export default function Chart({ dataX, labels={dataX} ,  maintainAspectRatio=true, aspectRatio=4, borderWidth=1, yGrid=false, xGrid=false, tooltipEnable=false }) {
  let radius = 0
  if(tooltipEnable){
    radius = 2
  }else{radius =0}
  useEffect(() => {
  },
  [dataX])
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataX,
        fill: false,
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: borderWidth
      },
    ],
  };

  const options = {
    maintainAspectRatio: maintainAspectRatio,
    aspectRatio: aspectRatio,
    responsive: true,
    elements: {
      point:{
        radius: radius
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip:{
        enabled: tooltipEnable,
        
        callbacks: {
          label: function(tooltipItems) { 
              return tooltipItems.formattedValue + ' Nok';
          }
        }
      },
    },
    scales: {
      legend: { display: false },
      x: {
        grid: {
          display: false,
          drawBorder: xGrid 
        },
        ticks: {display: false}
     },
      y: {
        grid: {
          display: yGrid,
          drawBorder: false
        },
        ticks: {
          display: yGrid,
          tickLength:5
        }
      }
    }
  };
 return (
     <Line data={data} options={options} />
 )
}

Chart.propTypes = {
  dataX: PropTypes.array.isRequired,
  borderWidth: PropTypes.number,
  yGrid: PropTypes.bool,
  xGrid: PropTypes.bool,
  tooltipEnable: PropTypes.bool,
  aspectRatio: PropTypes.number,
  maintainAspectRatio: PropTypes.bool,
  labels: PropTypes.array
}

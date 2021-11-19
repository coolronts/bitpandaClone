import 'chartjs-adapter-date-fns';

import React, {useEffect} from 'react'

import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types'

export default function Chart({ dataX,borderWidth=1,grid=false, yGrid=false, xGrid=false, tooltipEnable=false }) {
  let radius = 0
  if(tooltipEnable){
    radius = 2
  }else{radius =0}
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
        borderWidth: borderWidth
      },
    ],
  };

  const options = {
    aspectRatio: 4,
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
          label: function(tooltipItems, data) { 
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
  grid: PropTypes.bool,
  yGrid: PropTypes.bool,
  xGrid: PropTypes.bool,
  tooltipEnable: PropTypes.bool
}